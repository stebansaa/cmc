export default function handler(req,res) {
    const getData = async () => {
        const response = await fetch(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=100&CMC_PRO_API_KEY=e1704871-1291-4f16-8d47-f797f7e8d1c9`,
        {
            method: 'GET',
            headers: {
                Accept: '*/*'
            },
        },
        
        )

        const data = await response.json()

        res.status(200).json({data})
    }

    getData()
}