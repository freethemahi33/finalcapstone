import { TurnOrder } from "boardgame.io/core";
import montyPythonImage from "./monypython.png";
import React from 'react';
import { UpwardMobilityBoard } from "./Board";
import { eventsArray } from "./eventsfile";
import { itemsArray } from "./itemsFile";
import buriedTreasure from "./buriedtreasure.avif";



export const UpwardsMobility = {

    // Turn phase flow
    // 1) Roll dice move piece
    // 2) Choose event or use item
    // 3a) If event, show event, if answer question correctly something good happens otherwise something bad happens
    // if correct answer than they pick up item and or gain currency then end turn
    // if incorrect answer than negativeness happens then end turn
    // 3b) If they choose the item, activate the item and do item thing and then show event

    // rollScreen
    // eventOrItemScreen
    // itemScreen
    // eventScreen
    // correctAnswerScreen
    // wrongAnswerScreen
    // endTurnScreen

    setup: () => ({
        players: {
            0: {
                position: 0,
                inventory: [
                    // { name: "Staff of MoMoney", image: montyPythonImage, description: "item 1 description", onUse: "You randomly generate between 0 and 10 coins" },
                    // { name: "Staff of NoMoney", image: montyPythonImage, description: "item 2 description", onUse: "You randomly lose between 0 and 10 coins" },
                    // { name: "Orb of MoMoney", image: montyPythonImage, description: "item 3 description", onUse: "You gain the buff of MoMoney for 3 turns." }
                ],
                buffs: [],
                currency: 50,
                jobTitle: "Starting job title",
                jobTitleDescription: "Starting job description",
                selectedOption: -1,

            },
            1: {
                position: 0,
                inventory: [
                    // { name: "Staff of MoMoney", image: montyPythonImage, description: "item 1 description", onUse: "You randomly generate between 0 and 10 coins" },
                    // { name: "Staff of NoMoney", image: montyPythonImage, description: "item 2 description", onUse: "You randomly lose between 0 and 10 coins" },
                    // { name: "Orb of MoMoney", image: montyPythonImage, description: "item 3 description", onUse: "You gain the buff of MoMoney for 3 turns." }
                ],
                buffs: [],
                currency: 0,
                jobTitle: "Starting job title",
                jobTitleDescription: "Starting job title description",
                selectedOption: -1,

            },
            moveDist: 0,
        },

        jobTitles: [
            {name: "job title 1", description: "description for job title 1", previouslyHeldBy: []},
            {name: "job title 2", description: "description for job title 2", previouslyHeldBy: []},
            {name: "job title 3", description: "description for job title 3", previouslyHeldBy: []},
            {name: "job title 4", description: "description for job title 4", previouslyHeldBy: []},
    ],

        currentEvent: null,

    }),
    turn: {
        order: TurnOrder.CONTINUE,
    },

    // Define the moves for rolling the dice and updating the game state.
    moves: {
        rollDice: ({G, ctx, events}) => {
            const die1 = Math.floor(Math.random() * 6) + 1;
            const die2 = Math.floor(Math.random() * 6) + 1;
            let moveDist = die1 + die2;
            G.moveDist = moveDist;
            G.players[ctx.currentPlayer].position += moveDist;

            let getId = "playerToken" + ctx.currentPlayer
            console.log(getId)
            let currPlayToken = document.getElementById(getId)
            console.log(currPlayToken)
            console.log(document.getElementById(getId).style)
            let calc = (parseInt(document.getElementById(getId).style.top.toString().substring(0,2)))
            let disCalc = calc - (calc * (.025 * moveDist))
            disCalc = disCalc + "%"
            document.getElementById(getId).style.top = disCalc

            console.log("Player position: " + G.players[ctx.currentPlayer].position)

            const player = G.players[ctx.currentPlayer];
            if (player.position >= 10 && player.position <= 20) {
                console.log("Inside of job title check 10 - 20. Player position: " + player.position)
                // Choose a random job title from the list that the player has not held before
                let availableJobTitles = G.jobTitles.filter((jobTitle) => !jobTitle.previouslyHeldBy.includes(ctx.currentPlayer));
                if (availableJobTitles.length === 0) {
                    availableJobTitles = G.jobTitles;
                }
                const jobTitleIndex = Math.floor(Math.random() * availableJobTitles.length);
                const jobTitle = availableJobTitles[jobTitleIndex];
                player.jobTitle = jobTitle.name;
                player.jobTitleDescription = jobTitle.description;
                jobTitle.previouslyHeldBy.push(ctx.currentPlayer);
            }
            if (player.position >= 20 && player.position <= 30) {
                console.log("Inside of job title check 20 - 30. Player position: " + player.position)
                let availableJobTitles = G.jobTitles.filter((jobTitle) => !jobTitle.previouslyHeldBy.includes(ctx.currentPlayer));
                if (availableJobTitles.length === 0) {
                    availableJobTitles = G.jobTitles;
                }
                const jobTitleIndex = Math.floor(Math.random() * availableJobTitles.length);
                const jobTitle = availableJobTitles[jobTitleIndex];
                player.jobTitle = jobTitle.name;
                player.jobTitleDescription = jobTitle.description;
                jobTitle.previouslyHeldBy.push(ctx.currentPlayer);
            }
            if (player.position >= 30 && player.position <= 40) {
                console.log("Inside of job title check 30 - 40. Player position: " + player.position)
                let availableJobTitles = G.jobTitles.filter((jobTitle) => !jobTitle.previouslyHeldBy.includes(ctx.currentPlayer));
                if (availableJobTitles.length === 0) {
                    availableJobTitles = G.jobTitles;
                }
                const jobTitleIndex = Math.floor(Math.random() * availableJobTitles.length);
                const jobTitle = availableJobTitles[jobTitleIndex];
                player.jobTitle = jobTitle.name;
                player.jobTitleDescription = jobTitle.description;
                jobTitle.previouslyHeldBy.push(ctx.currentPlayer);
            }
            if (player.position >= 40 && player.position <= 50) {
                console.log("Inside of job title check 40 - 50. Player position: " + player.position)
                let availableJobTitles = G.jobTitles.filter((jobTitle) => !jobTitle.previouslyHeldBy.includes(ctx.currentPlayer));
                if (availableJobTitles.length === 0) {
                    availableJobTitles = G.jobTitles;
                }
                const jobTitleIndex = Math.floor(Math.random() * availableJobTitles.length);
                const jobTitle = availableJobTitles[jobTitleIndex];
                player.jobTitle = jobTitle.name;
                player.jobTitleDescription = jobTitle.description;
                jobTitle.previouslyHeldBy.push(ctx.currentPlayer);
            }

            console.log("Current player job title : " + G.players[ctx.currentPlayer].jobTitle)


            G.players[ctx.currentPlayer].buffs.forEach((buff, index) => {
                switch (buff.name) {
                    case "Buff of Mo Money":
                        G.players[ctx.currentPlayer].currency += 2;

                        buff.duration--;
                        if (buff.duration === 0) {
                            G.players[ctx.currentPlayer].buffs.splice(index, 1);
                        }
                        break;
                }
            });

            G.currentEvent = eventsArray[Math.floor(Math.random() * eventsArray.length)];
            // G.currentEvent = eventsArray[2];
            events.setPhase("eventOrItemScreen");
        },

        addCurrency: ({G, ctx, events}, currency) => {
            G.players[ctx.currentPlayer].currency += currency;
        },

        subtractCurrency: ({G, ctx, events}, currency) => {
            G.players[ctx.currentPlayer].currency -= currency;
        },

        moveForward: ({G, ctx, events}, moveDist) => {
            G.players[ctx.currentPlayer].position += moveDist;
        },

        moveBackward: ({G, ctx, events}, moveDist) => {
            G.players[ctx.currentPlayer].position -= moveDist;
        },

        // updated event response


        selectAnswer({G, ctx}, answerIndex) {
            G.players[ctx.currentPlayer].selectedOption = answerIndex;
        },

        pickUpItem: ({G, ctx}, obj) => {

            // console.log("Inside of pickUpItem function. Object: " + obj.type)
            console.log(obj)

            if (obj.type === "item") {
                G.players[ctx.currentPlayer].inventory.push(obj.item);
            }
            if (obj.type === "buff") {
                G.players[ctx.currentPlayer].buffs.push(obj.buff);
            }
            if (obj.type === "nothing") {
                console.log("Nothing happened")
            }
            if (obj.type === "both") {
                console.log("both item and buff will be pushed here")
            }
        },

        pickUpItemFromStore: ({G, ctx}, obj) => {
            G.players[ctx.currentPlayer].inventory.push(obj);
        },

        eventResponse: ({G, ctx, events}, eventEffect) => {

            switch (eventEffect) {
                case "effectResponse1":
                    G.players[ctx.currentPlayer].currency += 3;
                    console.log("Inside of move switch case for response 1")
                    break;
                case "effectResponse2":
                    G.players[ctx.currentPlayer].currency += 4;
                    const tempPosition = G.players[ctx.currentPlayer].position;

                    console.log("Inside of move switch case for response 2")
                    break;
                case "effectResponse3":
                    G.players[ctx.currentPlayer].currency += 5;
                    console.log("Inside of move switch case for response 3")
                    break;
                case "insufficientFundsEffect":
                    console.log("Inside of insufficient funds switch case")
                    break;
                case "nightMarketStore":
                    events.setPhase("nightMarketScreen");
                    console.log("Inside of night market store switch case")
                    break;

            }
        },

        // use item function

        useItem: ({G, ctx, events}, item) => {

            console.log("use item function");

            switch (item) {
                case "Staff of MoMoney":
                    G.players[ctx.currentPlayer].currency += Math.random() * 5;
                    break;
                case "Staff of NoMoney":
                    G.players[ctx.currentPlayer].currency -= Math.random() * 5;
                    break;
                case "Orb of MoMoney":
                    G.players[ctx.currentPlayer].buffs.push({ name: "Buff of Mo Money", image: buriedTreasure, description: "Description of buff", duration: 5 });
                    break;
            }


            const itemIndex = G.players[ctx.currentPlayer].inventory.indexOf(item);
            G.players[ctx.currentPlayer].inventory.splice(itemIndex, 1);

        },

        // apply buff function

        // applyBuff: ({ G, ctx }, playerId, buffType, duration) => {
        //     G.players[ctx.currentPlayer].buffs.push({ type: buffType, duration: duration });
        // },

    },
    phases: {
        rollScreen: {
            start: true
        },
        eventOrItemScreen: {

        },
        useItemScreen: {

        },
        eventScreen: {

        },
        correctAnswerScreen: {

        },
        wrongAnswerScreen: {

        },
        endTurnScreen: {

        },
        pickUpItemScreen: {

        },
        itemEffectResultScreen: {

        },
        useItemOnPlayerScreen: {

        },
        winningGameScreen: {

        },
        eventResponseScreen: {

        },
        eventResponseScreen2: {

        },
        insufficientFundsScreen: {

        },
        visitShopScreen: {

        },
        successfulPurchaseScreen: {

        },
        unsuccessfulPurchaseScreen: {

        },
        proceedToEventScreen: {

        },
        nightMarketScreen: {

        }
    },
}

// module.exports = { UpwardsMobility };
