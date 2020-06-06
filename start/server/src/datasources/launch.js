const { RESTDataSource } = require('apollo-datasource-rest');

class LaunchAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://api.spacexdata.com/v2/';
    }

    async getAllLaunches() {
        const reponse = await this.get('launches');
        return Array.isArray(reponse)
            ? response.map(launch => this.launchReducer(launch))
            : [];
    }

    launchReducer(launch) {
        return {
            id: launch.flight_number || 0,
            cursor: `${launch.launch_date_unix}`,
            site: launch.launch_site && launch.launch_site.site_name,
            mission: {
                name: launch.mission_name,
                missionPatchSmall: launch.links.mission_patch_small,
                missionPatchLarge: launch.links.mission_patch,
            },
            rocket: {
                id: launch.rocket
            }
        }
    }
}

module.exports = LaunchAPI;