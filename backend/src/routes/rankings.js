const express = require('express');
const router = express.Router();
const Ranking = require('../models/Ranking');
const { getMongoIdById, setId } = require('./../utilities/Utils');

router.get('/', async (req, res) => {
    const rankings = await Ranking.find();
    res.json({
        "response": [
            {
                "request": req.body,
                "allRankings": rankings,
                "numberOfRankings": rankings.length
            }
        ],
        "links": [
            {
                "rel": "self",
                "href": "/ranking",
                "method": "GET",
                "description": "List all rankings"
            },
            {
                "rel": "delete_rankings",
                "href": "/rankings",
                "method": "DELETE",
                "description": "Remove all rankings"
            }
        ]
    });
});

router.get('/:id', async (req, res) => {
    mongoId = await getMongoIdById(req.params.id, Ranking);
    const ranking = await Ranking.findById(mongoId);
    res.json({
        "response": [
            {
                "request": req.body,
                "ranking": ranking
            }
        ],
        "links": [
            {
                "rel": "self",
                "href": `/rankings/${ranking.id}`,
                "method": "GET",
                "description": `View rankings ${ranking.id} information`
            },
            {
                "rel": "next",
                "href": `/rankings/${ranking.id + 1}`,                // Tal vez el id + 1 haya sido eliminado
                "method": "GET",
                "description": `View ranking ${ranking.id + 1} information`
            },
            {
                "rel": "rankings",
                "href": "/rankings",
                "method": "GET",
                "description": `View all rankings`
            },
            {
                "rel": "rankings",
                "href": "/rankings",
                "method": "DELETE",
                "description": `Delete ranking ${ranking.id}`
            },
        ]
    });
});

router.post('/', async (req, res) => {
    const ranking = new Ranking(req.body);
    ranking.id = await setId(Ranking);
    await ranking.save();
    res.json({
        _id: ranking._id,
        id: ranking.id,
        datos: req.body,
        status: "New ranking saved",
        "response": [
            {
                "request": req.body,
                "ranking": ranking
            }
        ],
        "links": [
            {
                "rel": "self",
                "href": "/rankings",
                "method": "POST",
                "description": `Insert a ranking: ${ranking.name} in data base`
            }
        ]
    });
});

router.put('/:id', async (req, res) => {
    mongoId = await getMongoIdById(req.params.id, Ranking);
    await Ranking.findByIdAndUpdate(mongoId, req.body, { new: true });
    res.json({
        "response": [
            {
                "request": req.body,
                "ranking": req.body.name,
                "rankingInformation": req.body
            }
        ],
        "links": [
            {
                "rel": "self",
                "href": `/rankings/${req.body.id}`,
                "method": "PUT",
                "description": `Modify ranking ${req.body.id}`
            },
            {
                "rel": "get_rankings",
                "href": `/rankings/${req.body.id}`,
                "method": "GET",
                "description": `View ranking ${req.body.id}`
            },
            {
                "rel": "delete_rankings",
                "href": `/rankings/${req.body.id}`,
                "method": "DELETE",
                "description": `Delete ranking ${req.body.id}`
            }
        ]
    });
});

router.delete('/', async (req, res) => {
    await Ranking.remove({});
    res.json({
        "response": [
            {
                "request": req.body,
                "deletedEntries": req.body
            }
        ],
        "links": [
            {
                "rel": "delete_ranking",
                "href": "/rankings",
                "method": "DELETE",
                "description": "Remove rankings from data base"
            }
        ]
    });
});

module.exports = router;