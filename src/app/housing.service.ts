import { Service } from '@angular/core';
import {HousingLocationInfo} from "./housingLocation";

@Service()
export class HousingService {

    url = 'http://localhost:3000/locations';

    async getAllHousingLocations(): Promise<HousingLocationInfo[]> {
        const data = await fetch(this.url);

        return (await data.json()) ?? [];
    }

    async getHousingLocationById(id: number): Promise<HousingLocationInfo | undefined> {
        const data = await fetch(`${this.url}/${id}`);
        const locationJson = await data.json();

        return locationJson ?? {};
    }

    submitApplication(
        firstName: string,
        lastName: string,
        email: string
    ): void {
        console.log(`Homes application received: first name: ${firstName}, last name: ${lastName}, email: ${email}.`);
    }
}

