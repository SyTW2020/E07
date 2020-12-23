const express = require('express');
const router = express.Router();
const Game = require('../models/Game');
const { getMongoIdById, setId } = require('./../utilities/Utils');

router.get('/', async (req, res) => {
  const games = await Game.find();
  res.json({
    "response": [
      {
        "request": req.body,
        "allGames": games,
        "numberOfGames": games.length
      }
    ],
    "links": [
      {
        "rel": "self",
        "href": "/games",
        "method": "GET",
        "description": "List all games"
      },
      {
        "rel": "delete_games",
        "href": "/games",
        "method": "DELETE",
        "description": "Remove all games"
      }
    ]
  });
});

router.get('/:id', async (req, res) => {
  mongoId = await getMongoIdById(req.params.id, Game);
  const game = await Game.findById(mongoId);
  res.json({
    "response": [
      {
        "request": req.body,
        "game": game
      }
    ],
    "links": [
      {
        "rel": "self",
        "href": `/games/${game.id}`,
        "method": "GET",
        "description": `View games ${game.id} information`
      },
      {
        "rel": "next",
        "href": `/games/${game.id + 1}`,                // Tal vez el id + 1 haya sido eliminado
        "method": "GET",
        "description": `View game ${game.id + 1} information`
      },
      {
        "rel": "games",
        "href": "/games",
        "method": "GET",
        "description": `View all games`
      },
      {
        "rel": "games",
        "href": "/games",
        "method": "DELETE",
        "description": `Delete game ${game.id}`
      }
    ]
  });
});

router.post('/', async (req, res) => {
  const game = new Game(req.body);
  game.id = await setId(Game);
  await game.save();
  res.json({
    "response": [
      {
        "request": req.body,
        "game": game
      }
    ],
    "links": [
      {
        "rel": "self",
        "href": "/games",
        "method": "POST",
        "description": `Insert a game: ${game.name} in data base`
      }
    ]
  });
});

router.put('/:id', async (req, res) => {
  mongoId = await getMongoIdById(req.params.id, Game);
  await Game.findByIdAndUpdate(mongoId, req.body, { new: true });
  res.json({
    "response": [
      {
        "request": req.body,
        "game": req.body.name,
        "gameInformation": req.body
      }
    ],
    "links": [
      {
        "rel": "self",
        "href": `/games/${req.body.id}`,
        "method": "PUT",
        "description": `Modify game ${req.body.id}`
      },
      {
        "rel": "get_game",
        "href": `/games/${req.body.id}`,
        "method": "GET",
        "description": `View game ${req.body.id}`
      },
      {
        "rel": "delete_game",
        "href": `/games/${req.body.id}`,
        "method": "DELETE",
        "description": `Delete game ${req.body.id}`
      }
    ]
  });
});

router.delete('/', async (req, res) => {
  await Game.remove({});
  res.json({
    "response": [
      {
        "request": req.body,
        "deletedGames": req.body
      }
    ],
    "links": [
      {
          "rel": "delete_games",
          "href": "/games",
          "method": "DELETE",
          "description": "Remove all games from data base"
      }
    ]
  });
});

router.delete('/:id', async (req, res) => {
  mongoId = await getMongoIdById(req.params.id, Game);
  await Game.findByIdAndRemove(mongoId);
  res.json({
    "response": [
      {
        "request": req.body,
        "status": `Deleted game ${req.params.id}`
      }
    ],
    "links": [
      {
        "rel": "self",
        "href": `/games/${req.params.id}`,
        "method": "DELETE",
        "description": `Delete game ${req.params.id}`
      },
      {
        "rel": "get_games",
        "href": `/games/`,
        "method": "GET",
        "description": `View all games`
      },
      {
        "rel": "delete_all_games",
        "href": `/games/`,
        "method": "DELETE",
        "description": `Delete all game`
      }
    ]
  });
});

module.exports = router;