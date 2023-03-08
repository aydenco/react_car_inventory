const token = '6ba33d01709e5ff9cc1277187e0154efe68b2eb9d3fd907e'
// const headers = 


export const server_calls = {
    get: async () => {
        const response = await fetch(`https://knotty-daisy-ocelot.glitch.me/api/vehicles`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Basic ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }



        return await response.json()
    },

    create: async (data: any = {}) => {
        const response = await fetch(`https://knotty-daisy-ocelot.glitch.me/api/vehicles`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Basic ${token}`
            },
            body: JSON.stringify(data)
        });

        if(!response.ok) {
            throw new Error('Failed to Create new data on server')
        }

        return await response.json()
    },

    update: async (id:string, data: any = {}) => {
        const response = await fetch(`https://knotty-daisy-ocelot.glitch.me/api/vehicles/${id}`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Basic ${token}`
            },
            body: JSON.stringify(data)
        })
        
        if (!response.ok) {
            throw new Error('Failed to Update data on server')
        }

        return await response.json()        
    },

    delete: async (id:string) => {
        const response = await fetch(`https://knotty-daisy-ocelot.glitch.me/api/vehicles/${id}`,
        {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Basic ${token}`
            }
        })
        
        if (!response.ok) {
            throw new Error('Failed to Delete data on server')
        }
        
        return;
    },
}