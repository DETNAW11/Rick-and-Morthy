// const axios = require("axios")
// const URL = "https://rickandmortyapi.com/api/character/"

// const getCharById = (res, id) => {
//     axios.get(URL + id)
//         .then((response) => response.data)
//         .then((data) => {
//             const character = {
//                 id: data.id,
//                 name: data.name,
//                 gender: data.gender,
//                 species: data.species,
//                 origin: data.origin?.name,
//                 image: data.image,
//                 status: data.status
//             }
//             res.writeHead(200, {"Content-Type": "application/json"});
//             res.end(JSON.stringify(character));
//         })
//         .catch(error => {
//             res.writeHead(500, {"Content-Type": "text/plain"});
//             res.end(error.message);
//             // res.writeHead(500, {"Content-Type": "application/json"});
//             // res.end({error: error.message});
//         });
// }

// module.exports = getCharById

const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = (req, res) => {
  const {id} = req.params;

  axios(URL + id)
    .then((response) => response.data)
    .then((data) => {
      const character = {
        id: data.id,
        name: data.name,
        gender: data.gender,
        species: data.species,
        origin: data.origin?.name,
        image: data.image,
        status: data.status,
      };

      character.name
        ? res.status(200).json(character)
        : res.status(404).send("Not found");
    })
    .catch((error) => {
      res.status(500).json({message: error.message});
    });
};

module.exports = getCharById;
