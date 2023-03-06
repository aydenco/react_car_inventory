const token = '6ba33d01709e5ff9cc1277187e0154efe68b2eb9d3fd907e'


export const server_calls = {
    get: async () => {
        const response = await fetch('https://knotty-daisy-ocelot.glitch.me/api/vehicles',
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Basic ${token}`
            },
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }



        return await response.json()
    }
}