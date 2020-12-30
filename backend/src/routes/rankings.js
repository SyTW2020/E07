const express = require('express');
const router = express.Router();
const Ranking = require('../models/Ranking');
const { rankingsOfUser, rankingsOfGame } = require('./../utilities/Utils');

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

router.get('/user/:nickname', async (req, res) => {
  const ranking = await rankingsOfUser(req.params.nickname, Ranking);
  if (!ranking)
    res.status(404).send({ "response": [{ "code": 404, "error": "El usuario no tiene rankings." }] });
  else {
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
          "href": `/rankings/user/${ranking.nickname}`,
          "method": "GET",
          "description": `View rankings ${ranking.nickname} information`
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
          "description": `Delete ranking ${ranking.nickname}`
        }
      ]
    });
  }
});

router.get('/:game', async (req, res) => {
  const ranking = await rankingsOfGame(req.params.game, Ranking);
  if (!ranking)
    res.status(404).send({ "response": [{ "code": 404, "error": "El juego no tiene rankings." }] });
  else {
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
          "href": `/rankings/user/${ranking.game}`,
          "method": "GET",
          "description": `View rankings ${ranking.game} information`
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
          "description": `Delete ranking ${ranking.game}`
        }
      ]
    });
  }
});

router.post('/', async (req, res) => {
  const ranking = new Ranking(req.body);
  await ranking.save();
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
        "href": "/rankings",
        "method": "POST",
        "description": `Insert a ranking: ${ranking.name} in data base`
      }
    ]
  });
});

router.put('/:nickname', async (req, res) => {
  const ranking = await rankingsOfUser(req.params.nickname, Ranking);
  await Ranking.findByIdAndUpdate(ranking, req.body, { new: true });
  res.json({
    "response": [
      {
        "request": req.body,
        "ranking": ranking.nickname,
        "rankingInformation": req.body
      }
    ],
    "links": [
      {
        "rel": "self",
        "href": `/rankings/${ranking.nickname}`,
        "method": "PUT",
        "description": `Modify ranking ${ranking.nickname}`
      },
      {
        "rel": "get_rankings",
        "href": `/rankings/${ranking.nickname}`,
        "method": "GET",
        "description": `View ranking ${ranking.nickname}`
      },
      {
        "rel": "delete_rankings",
        "href": `/rankings/${ranking.nickname}`,
        "method": "DELETE",
        "description": `Delete ranking ${ranking.nickname}`
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