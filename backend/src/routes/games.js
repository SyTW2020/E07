const express = require('express');
const router = express.Router();
const Game = require('../models/Game');
const { isGame } = require('./../utilities/Utils');

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

router.get('/:name', async (req, res) => {
  const game = await isGame(req.params.name, Game);
  if (!game)
    res.status(404).send({ "response": [{ "code": 404, "error": "El juego no existe." }] });
    
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
        "href": `/games/${game.name}`,
        "method": "GET",
        "description": `View games ${game.name} information`
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
        "description": `Delete game ${game.name}`
      }
    ]
  });
});

router.post('/', async (req, res) => {
  const game = new Game(req.body);
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

router.put('/:name', async (req, res) => {
  const game = await isGame(req.params.name, Game);
  if (!game)
    res.status(404).send({ "response": [{ "code": 404, "error": "El juego no existe." }] });
    
  await Game.findByIdAndUpdate(game, req.body, { new: true });
  res.json({
    "response": [
      {
        "request": req.body,
        "game": game.name,
        "gameInformation": game
      }
    ],
    "links": [
      {
        "rel": "self",
        "href": `/games/${game.name}`,
        "method": "PUT",
        "description": `Modify game ${game.name}`
      },
      {
        "rel": "get_game",
        "href": `/games/${game.name}`,
        "method": "GET",
        "description": `View game ${game.name}`
      },
      {
        "rel": "delete_game",
        "href": `/games/${game.name}`,
        "method": "DELETE",
        "description": `Delete game ${game.name}`
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

router.delete('/:name', async (req, res) => {
  const game = await isGame(req.params.name, Game);
  await Game.findByIdAndRemove(game);
  res.json({
    "response": [
      {
        "request": req.body,
        "status": `Deleted game ${game.name}`
      }
    ],
    "links": [
      {
        "rel": "self",
        "href": `/games/${game.name}`,
        "method": "DELETE",
        "description": `Delete game ${game.name}`
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