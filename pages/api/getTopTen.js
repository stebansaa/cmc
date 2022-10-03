export default function handler(req,res) {
    const getData = async () => {
        const response = await fetch(`https://raw.githubusercontent.com/evm20/JsonCMC/main/newjson.json`,
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