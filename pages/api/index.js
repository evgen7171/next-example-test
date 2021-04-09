// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
    res.status(200).json({
        'name': 'lorem',
        'tnt': 'test',
        'some': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium aliquam animi consequatur consequuntur corporis culpa cum cupiditate distinctio, ducimus eius est facere illum ipsam labore magni minima nam necessitatibus nemo nobis numquam odio odit, placeat porro provident quibusdam quisquam reiciendis rem reprehenderit saepe sapiente similique sint tempora ullam veritatis?'
    })
}
