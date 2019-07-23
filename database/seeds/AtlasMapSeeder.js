'use strict'

/*
|--------------------------------------------------------------------------
| AtlasMapSeeder
|--------------------------------------------------------------------------
*/

const Mode = use('App/Models/Mode');
const Country = use('App/Models/Country');
const Cluster = use('App/Models/Cluster');
const Biome = use('App/Models/Biome');
const RegionType = use('App/Models/RegionType');
const Region = use('App/Models/Region');
const RegionStat = use('App/Models/RegionStat');

class AtlasMapSeeder {
  async run () {

    const atlasData = use('./data/atlas_map_data.json');
    const { modes, countries, region_types, biomes, regions } = atlasData;

    atlasData._modes = await this.findOrCreate('mode', modes, Mode);
    atlasData._countries = await this.findOrCreate('code', countries, Country);
    atlasData._region_types = await this.findOrCreate('type', region_types, RegionType);
    atlasData._biomes = await this.findOrCreate('biome', biomes, Biome);

    let clusterIndex = 1;
    atlasData._clusters = [];

    for (let mode of modes) {
      for (let code of countries) {
        let clusterData = { mode_id: atlasData._modes[mode],  country_id: atlasData._countries[code] };
        let cluster = await Cluster.findOrCreate(clusterData, {id: clusterIndex++, ...clusterData});
        atlasData._clusters.push({id: cluster.id, mode, code});
      }
    }

    for (let region of regions) {
      let _region = {
        cluster_id: atlasData._clusters.find((r) => r.mode === region.mode && r.code === region.country).id,
        biome_id: atlasData._biomes[region.biome],
        type_id: atlasData._region_types[region.type],
        region: region.region,
        ip: region.ip,
        port: region.port
      }
      await Region.findOrCreate(_region, _region);
    }

  }

  async findOrCreate(col, rows, Model) {
    let object = {};
    for(let [index, value] of rows.entries()) {
      object[value] = (await Model.findOrCreate({[col]: value}, {id: index + 1, [col]: value})).id;
    }
    return object;
  }

}

module.exports = AtlasMapSeeder
