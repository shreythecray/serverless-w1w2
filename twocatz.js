module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    //https://cataas.com/cat/cute/says/Bitcamp?color=purple&text=75

    const name1 = (req.query.name1 || (req.body && req.body.color));
    const color = (req.query.color || (req.body && req.body.name1));
    const textsize = (req.query.textsize || (req.body && req.body.textsize));

    let cat1_response = Buffer.from("https://cataas.com/cat/cute/says/"+name1+"?color=" + color + "&text=" + textsize).toString('base64')
    let cat2_response = Buffer.from("https://cataas.com/cat/cute/says/Bitcamp?color=purple&text=75").toString('base64');
    
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: {
            cat1: cat1_response,
            cat2: cat2_response,
            names: ["daniel", "evelyn"]
        }

    };
}