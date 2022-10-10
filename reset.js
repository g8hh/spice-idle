//code for doing color shifts/boosts
function color_boost(override) {
    let can_boost = false

    switch (game.color_boosts) {
        case 0:
            if (game.red_spice_gen[5].cmp(50) >= 0) can_boost = true
            break
        case 1:
            if (game.yellow_spice_gen[5].cmp(50) >= 0) can_boost = true
            break
        case 2:
            if (game.green_spice_gen[5].cmp(50) >= 0) can_boost = true
            break
        case 3:
            if (game.blue_spice_gen[5].cmp(50) >= 0) can_boost = true
            break
        default:
            if (game.color_boosts <= 8) {
                if (game.pink_spice_bought[5] >= game.color_boosts * 25 - 50)
                    can_boost = true
            } else if (game.color_boosts <= 29) {
                if (game.pink_spice_bought[5] >= game.color_boosts * 50 - 250)
                    can_boost = true
            } else if (game.color_boosts <= 133) {
                if (game.pink_spice_bought[5] >= game.color_boosts * 75 - 975)
                    can_boost = true
            } else if (game.color_boosts <= 223) {
                if (game.pink_spice_bought[5] >= game.color_boosts * 100 - 4300)
                    can_boost = true
            } else if (game.color_boosts <= 523) {
                if (
                    game.pink_spice_bought[5] >=
                    game.color_boosts * 150 - 15450
                )
                    can_boost = true
            } else if (game.color_boosts <= 1201) {
                if (
                    game.pink_spice_bought[5] >=
                    game.color_boosts * 200 - 41600
                )
                    can_boost = true
            } else if (game.color_boosts <= 4104) {
                if (
                    game.pink_spice_bought[5] >=
                    game.color_boosts * 300 - 161700
                )
                    can_boost = true
            } else if (game.color_boosts <= 7500) {
                if (
                    game.pink_spice_bought[5] >=
                    game.color_boosts * 500 - 982500
                )
                    can_boost = true
            } else {
                if (
                    game.pink_spice_bought[5] >=
                    game.color_boosts * 2500 - 15982500
                )
                    can_boost = true
            }
            break
    }

    if (override) can_boost = true

    if (can_boost) {
        if (game.prestige_bought[22] === 0 || override) {
            game.red_spice = new Decimal(5)
            game.yellow_spice = new Decimal(5)
            game.green_spice = new Decimal(5)
            game.blue_spice = new Decimal(5)
            game.pink_spice = new Decimal(5)

            game.global_spice_boost = new Decimal(1)

            game.red_spice_gen = [
                new Decimal(0),
                new Decimal(0),
                new Decimal(0),
                new Decimal(0),
                new Decimal(0),
                new Decimal(0),
            ]
            game.red_spice_bought = [0, 0, 0, 0, 0, 0]
            game.red_spice_boost = [
                new Decimal(1),
                new Decimal(1),
                new Decimal(1),
                new Decimal(1),
                new Decimal(1),
                new Decimal(1),
            ]
            game.total_red_spice_boost = [
                new Decimal(1),
                new Decimal(1),
                new Decimal(1),
                new Decimal(1),
                new Decimal(1),
                new Decimal(1),
            ]
            game.red_spice_price = [
                new Decimal(5),
                new Decimal(150),
                new Decimal(30000),
                new Decimal(4.5 * 10 ** 8),
                new Decimal(6 * 10 ** 13),
                new Decimal(9 * 10 ** 20),
            ]
            game.red_strengthener_price = new Decimal(1000000)
            game.red_strengthener = 0

            game.yellow_spice_gen = [
                new Decimal(0),
                new Decimal(0),
                new Decimal(0),
                new Decimal(0),
                new Decimal(0),
                new Decimal(0),
            ]
            game.yellow_spice_bought = [0, 0, 0, 0, 0, 0]
            game.yellow_spice_boost = [
                new Decimal(1),
                new Decimal(1),
                new Decimal(1),
                new Decimal(1),
                new Decimal(1),
                new Decimal(1),
            ]
            game.total_yellow_spice_boost = [
                new Decimal(1),
                new Decimal(1),
                new Decimal(1),
                new Decimal(1),
                new Decimal(1),
                new Decimal(1),
            ]
            game.yellow_spice_price = [
                new Decimal(5),
                new Decimal(300),
                new Decimal(100000),
                new Decimal(3.5 * 10 ** 9),
                new Decimal(1.5 * 10 ** 15),
                new Decimal(6 * 10 ** 22),
            ]
            game.yellow_strengthener_price = new Decimal(6000000)
            game.yellow_strengthener = 0

            game.green_spice_gen = [
                new Decimal(0),
                new Decimal(0),
                new Decimal(0),
                new Decimal(0),
                new Decimal(0),
                new Decimal(0),
            ]
            game.green_spice_bought = [0, 0, 0, 0, 0, 0]
            game.green_spice_boost = [
                new Decimal(1),
                new Decimal(1),
                new Decimal(1),
                new Decimal(1),
                new Decimal(1),
                new Decimal(1),
            ]
            game.total_green_spice_boost = [
                new Decimal(1),
                new Decimal(1),
                new Decimal(1),
                new Decimal(1),
                new Decimal(1),
                new Decimal(1),
            ]
            game.green_spice_price = [
                new Decimal(5),
                new Decimal(600),
                new Decimal(500000),
                new Decimal(3 * 10 ** 10),
                new Decimal(3.5 * 10 ** 16),
                new Decimal(3.5 * 10 ** 24),
            ]
            game.green_strengthener_price = new Decimal(3.5 * 10 ** 7)
            game.green_strengthener = 0

            game.blue_spice_gen = [
                new Decimal(0),
                new Decimal(0),
                new Decimal(0),
                new Decimal(0),
                new Decimal(0),
                new Decimal(0),
            ]
            game.blue_spice_bought = [0, 0, 0, 0, 0, 0]
            game.blue_spice_boost = [
                new Decimal(1),
                new Decimal(1),
                new Decimal(1),
                new Decimal(1),
                new Decimal(1),
                new Decimal(1),
            ]
            game.total_blue_spice_boost = [
                new Decimal(1),
                new Decimal(1),
                new Decimal(1),
                new Decimal(1),
                new Decimal(1),
                new Decimal(1),
            ]
            game.blue_spice_price = [
                new Decimal(5),
                new Decimal(1000),
                new Decimal(2000000),
                new Decimal(2.5 * 10 ** 11),
                new Decimal(8.5 * 10 ** 17),
                new Decimal(2.5 * 10 ** 26),
            ]
            game.blue_strengthener_price = new Decimal(2 * 10 ** 8)
            game.blue_strengthener = 0

            game.pink_spice_gen = [
                new Decimal(0),
                new Decimal(0),
                new Decimal(0),
                new Decimal(0),
                new Decimal(0),
                new Decimal(0),
            ]
            game.pink_spice_bought = [0, 0, 0, 0, 0, 0]
            game.pink_spice_boost = [
                new Decimal(1),
                new Decimal(1),
                new Decimal(1),
                new Decimal(1),
                new Decimal(1),
                new Decimal(1),
            ]
            game.total_pink_spice_boost = [
                new Decimal(1),
                new Decimal(1),
                new Decimal(1),
                new Decimal(1),
                new Decimal(1),
                new Decimal(1),
            ]
            game.pink_spice_price = [
                new Decimal(5),
                new Decimal(2500),
                new Decimal(8000000),
                new Decimal(2 * 10 ** 12),
                new Decimal(2 * 10 ** 19),
                new Decimal(1.5 * 10 ** 28),
            ]
            game.pink_strengthener_price = new Decimal(1.5 * 10 ** 9)
            game.pink_strengthener = 0

            game.color_boosts++
        } else {
            if (game.color_boosts >= 4) {
                if (game.pink_spice_bought[5] <= 150) {
                    game.color_boosts =
                        Math.floor((game.pink_spice_bought[5] + 50) / 25) + 1
                } else if (game.pink_spice_bought[5] <= 1200) {
                    game.color_boosts =
                        Math.floor((game.pink_spice_bought[5] + 250) / 50) + 1
                } else if (game.pink_spice_bought[5] <= 9000) {
                    game.color_boosts =
                        Math.floor((game.pink_spice_bought[5] + 975) / 75) + 1
                } else if (game.pink_spice_bought[5] <= 18000) {
                    game.color_boosts =
                        Math.floor((game.pink_spice_bought[5] + 4300) / 100) + 1
                } else if (game.pink_spice_bought[5] <= 63000) {
                    game.color_boosts =
                        Math.floor((game.pink_spice_bought[5] + 15450) / 150) +
                        1
                } else if (game.pink_spice_bought[5] <= 198600) {
                    game.color_boosts =
                        Math.floor((game.pink_spice_bought[5] + 41600) / 200) +
                        1
                } else if (game.pink_spice_bought[5] <= 1069500) {
                    game.color_boosts =
                        Math.floor((game.pink_spice_bought[5] + 161700) / 300) +
                        1
                } else if (game.pink_spice_bought[5] <= 2767500) {
                    game.color_boosts =
                        Math.floor((game.pink_spice_bought[5] + 982500) / 500) +
                        1
                } else {
                    game.color_boosts =
                        Math.floor(
                            (game.pink_spice_bought[5] + 15982500) / 2500
                        ) + 1
                }
            } else {
                game.color_boosts++
            }
        }
    }
}

//code for prestiging
function prestige(override) {
    if (game.color_boosts >= 10 || override) {
        game.prestige++
        let amount = new Decimal(0)
        if (game.color_boosts <= 16)
            amount = new Decimal(2).pow((game.color_boosts - 10) / 3)
        else amount = new Decimal(2).pow((game.color_boosts - 8) / 4)
        game.rainbow_spice = game.rainbow_spice.add(amount)
        for (let i = 8; i >= 0; i--) {
            game.prestige_amount_history[i + 1] =
                game.prestige_amount_history[i]
            game.prestige_time_history[i + 1] = game.prestige_time_history[i]
        }
        game.prestige_amount_history[0] = amount
        game.prestige_time_history[0] = game.prestige_time_played

        game.prestige_time_played = 0

        if (game.ascend_bought[9]) {
            if (game.autopr_mode === 0) {
                game.autopr_goal2[0] += game.autopr_delta[0]
            }
            if (game.autopr_mode === 1) {
                game.autopr_goal2[1] = game.autopr_goal2[1].mul(
                    game.autopr_delta[1]
                )
            }
        }

        game.crystal_spice = new Decimal(0)
        for (let i = 0; i < 6; i++) {
            game.crystal_spice_gen[i] = new Decimal(
                game.crystal_spice_bought[i]
            )
        }
        game.crystal_infusion = 0
        game.crystal_infusion_price = new Decimal(10)

        color_boost(true)
        game.color_boosts = game.prestige_bought[4]
        if (game.prestige_bought[4] < prestige_upgrade.upgrades[4].max)
            game.subtab[0] = 0
    }
}

//code for ascending
function ascend(override) {
    if (game.rainbow_spice.cmp(Decimal.pow(2, 1024)) >= 0) {
        let ascend_ready = false

        if (override || !game.ascend_confirm) ascend_ready = true
        else {
            if (
                confirm(
                    "Are you sure you want to Ascend? This will reset EVERYTHING so far!"
                )
            ) {
                ascend_ready = true
            }
        }

        if (ascend_ready) {
            game.ascend++
            let amount = Math.floor(
                (game.rainbow_spice.log(Decimal.pow(2, 512)) / 2) ** 8
            )
            game.ansuz += amount

            for (let i = 8; i >= 0; i--) {
                game.ascend_amount_history[i + 1] =
                    game.ascend_amount_history[i]
                game.ascend_time_history[i + 1] = game.ascend_time_history[i]
            }
            game.ascend_amount_history[0] = amount
            game.ascend_time_history[0] = game.ascend_time_played

            game.ascend_time_played = 0

            game.autopr_goal2[0] = 0
            game.autopr_goal2[1] = new Decimal(1)

            for (let i = 0; i < 3; i++) {
                game.rune_power[i] = 0
                game.rune_boost[i] = new Decimal(1)
            }

            game.prestige_bought = new Array(26).fill(0)
            game.prestige_bought[12] = 1
            game.prestige_bought[25] = 1

            prestige_upgrade.upgrades[0].price = new Decimal(1)
            prestige_upgrade.upgrades[2].price = new Decimal(2)
            prestige_upgrade.upgrades[3].price = new Decimal(4)
            prestige_upgrade.upgrades[4].price = new Decimal(8)
            prestige_upgrade.upgrades[5].price = new Decimal(16)
            prestige_upgrade.upgrades[9].price = Decimal.pow(2, 20)
            prestige_upgrade.upgrades[20].price = Decimal.pow(2, 214)

            if (game.ascend_bought[3]) {
                game.prestige_bought[0] = 5
                prestige_upgrade.upgrades[0].price = new Decimal(2).pow(24)
                game.prestige_bought[4] = 4
                prestige_upgrade.upgrades[4].price = new Decimal(2048)
                game.prestige_bought[8] = 1
                game.prestige_bought[13] = 1
                game.prestige_bought[15] = 1
                game.prestige_bought[22] = 1
            }

            prestige(true)
            game.prestige = 0
            game.rainbow_spice = new Decimal(0)
            game.prestige_amount_history = new Array(10).fill(-1)
            game.prestige_time_history = new Array(10).fill(-1)

            game.crystal_spice_price = [
                Decimal.pow(2, 56),
                Decimal.pow(2, 62),
                Decimal.pow(2, 68),
                Decimal.pow(2, 84),
                Decimal.pow(2, 100),
                Decimal.pow(2, 124),
            ]
            game.crystal_spice_gen = [
                new Decimal(0),
                new Decimal(0),
                new Decimal(0),
                new Decimal(0),
                new Decimal(0),
                new Decimal(0),
            ]
            game.crystal_spice_bought = [0, 0, 0, 0, 0, 0]
            game.crystal_spice_boost = [
                new Decimal(1),
                new Decimal(1),
                new Decimal(1),
                new Decimal(1),
                new Decimal(1),
                new Decimal(1),
            ]
            game.crystal_strengthener = 0
            game.crystal_strengthener_price = Decimal.pow(2, 76)
        }
    } else {
        if (override) {
            game.ascend_time_played = 0

            game.autopr_goal2[0] = 0
            game.autopr_goal2[1] = new Decimal(1)

            for (let i = 0; i < 3; i++) {
                game.rune_power[i] = 0
                game.rune_boost[i] = new Decimal(1)
            }

            game.prestige_bought = new Array(26).fill(0)
            game.prestige_bought[12] = 1
            game.prestige_bought[25] = 1

            prestige_upgrade.upgrades[0].price = new Decimal(1)
            prestige_upgrade.upgrades[2].price = new Decimal(2)
            prestige_upgrade.upgrades[3].price = new Decimal(4)
            prestige_upgrade.upgrades[4].price = new Decimal(8)
            prestige_upgrade.upgrades[5].price = new Decimal(16)
            prestige_upgrade.upgrades[9].price = Decimal.pow(2, 20)
            prestige_upgrade.upgrades[20].price = Decimal.pow(2, 214)

            if (game.ascend_bought[3]) {
                game.prestige_bought[0] = 5
                prestige_upgrade.upgrades[0].price = new Decimal(2).pow(24)
                game.prestige_bought[4] = 4
                prestige_upgrade.upgrades[4].price = new Decimal(2048)
                game.prestige_bought[8] = 1
                game.prestige_bought[13] = 1
                game.prestige_bought[15] = 1
                game.prestige_bought[22] = 1
            }

            prestige(true)
            game.prestige = 0
            game.rainbow_spice = new Decimal(0)
            game.prestige_amount_history = new Array(10).fill(-1)
            game.prestige_time_history = new Array(10).fill(-1)

            game.crystal_spice_price = [
                Decimal.pow(2, 56),
                Decimal.pow(2, 62),
                Decimal.pow(2, 68),
                Decimal.pow(2, 84),
                Decimal.pow(2, 100),
                Decimal.pow(2, 124),
            ]
            game.crystal_spice_gen = [
                new Decimal(0),
                new Decimal(0),
                new Decimal(0),
                new Decimal(0),
                new Decimal(0),
                new Decimal(0),
            ]
            game.crystal_spice_bought = [0, 0, 0, 0, 0, 0]
            game.crystal_spice_boost = [
                new Decimal(1),
                new Decimal(1),
                new Decimal(1),
                new Decimal(1),
                new Decimal(1),
                new Decimal(1),
            ]
            game.crystal_strengthener = 0
            game.crystal_strengthener_price = Decimal.pow(2, 76)
        }
    }
}
