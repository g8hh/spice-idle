//code for doing color shifts/boosts
function color_boost(override) {
    let can_boost = false
    let scaling = 1
    let scaling2 = 1n
    if (game.ascend_challenge === 3 || game.collapse_challenge === 7) {
        scaling = 10
        scaling2 = 10n
    }
    switch (game.color_boosts) {
        case 0:
            if (game.red_spice_gen[5].cmp(50 * scaling) >= 0) can_boost = true
            break
        case 1:
            if (game.yellow_spice_gen[5].cmp(50 * scaling) >= 0)
                can_boost = true
            break
        case 2:
            if (game.green_spice_gen[5].cmp(50 * scaling) >= 0) can_boost = true
            break
        case 3:
            if (game.blue_spice_gen[5].cmp(50 * scaling) >= 0) can_boost = true
            break
        default:
            if (game.collapse_challenge === 10) {
                if (
                    game.pink_spice_bought[5] >=
                    Math.ceil(
                        (game.color_boosts + (33 ** 0.5 - 9) / 2) ** 3 -
                            (9 * 33 ** 0.5 - 125) / 2
                    )
                )
                    can_boost = true
            } else {
                if (game.color_boosts <= 8) {
                    if (
                        game.pink_spice_bought[5] >=
                        (game.color_boosts * 25 - 50) * scaling
                    )
                        can_boost = true
                } else if (game.color_boosts <= 29) {
                    if (
                        game.pink_spice_bought[5] >=
                        (game.color_boosts * 50 - 250) * scaling
                    )
                        can_boost = true
                } else if (game.color_boosts <= 133) {
                    if (
                        game.pink_spice_bought[5] >=
                        (game.color_boosts * 75 - 975) * scaling
                    )
                        can_boost = true
                } else if (game.color_boosts <= 223) {
                    if (
                        game.pink_spice_bought[5] >=
                        (game.color_boosts * 100 - 4300) * scaling
                    )
                        can_boost = true
                } else if (game.color_boosts <= 523) {
                    if (
                        game.pink_spice_bought[5] >=
                        (game.color_boosts * 150 - 15450) * scaling
                    )
                        can_boost = true
                } else if (game.color_boosts <= 1201) {
                    if (
                        game.pink_spice_bought[5] >=
                        (game.color_boosts * 200 - 41600) * scaling
                    )
                        can_boost = true
                } else if (game.color_boosts <= 4104) {
                    if (
                        game.pink_spice_bought[5] >=
                        (game.color_boosts * 300 - 161700) * scaling
                    )
                        can_boost = true
                } else if (game.color_boosts <= 7501) {
                    if (
                        game.pink_spice_bought[5] >=
                        (game.color_boosts * 500 - 982500) * scaling
                    )
                        can_boost = true
                } else if (game.color_boosts <= 50003) {
                    if (
                        game.pink_spice_bought[5] >=
                        (game.color_boosts * 1000 - 4733000) * scaling
                    )
                        can_boost = true
                } else if (game.color_boosts <= game.augment_start) {
                    if (
                        game.pink_spice_bought[5] >=
                        (game.color_boosts * 2500 - 79737500) * scaling
                    )
                        can_boost = true
                } else {
                    let amount = game.augment_start * 2500 - 79737500
                    if (
                        game.pink_spice_bought[5] >=
                        (((game.color_boosts - game.augment_start + 2500) *
                            (game.color_boosts - game.augment_start + 2501)) /
                            2 +
                            amount -
                            3126250) *
                            scaling
                    )
                        can_boost = true
                }
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

            game.highest_red_spice = new Decimal(5)
            game.highest_yellow_spice = new Decimal(5)
            game.highest_green_spice = new Decimal(5)
            game.highest_blue_spice = new Decimal(5)
            game.highest_pink_spice = new Decimal(5)

            game.global_spice_boost = new Decimal(1)

            game.red_spice_gen = [
                new Decimal(0),
                new Decimal(0),
                new Decimal(0),
                new Decimal(0),
                new Decimal(0),
                new Decimal(0),
            ]
            game.red_spice_bought = [0n, 0n, 0n, 0n, 0n, 0n]
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
            game.yellow_spice_bought = [0n, 0n, 0n, 0n, 0n, 0n]
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
                new Decimal(250),
                new Decimal(60000),
                new Decimal(2 * 10 ** 9),
                new Decimal(3 * 10 ** 14),
                new Decimal(5.5 * 10 ** 21),
            ]
            game.yellow_strengthener_price = new Decimal(3000000)
            game.yellow_strengthener = 0

            game.green_spice_gen = [
                new Decimal(0),
                new Decimal(0),
                new Decimal(0),
                new Decimal(0),
                new Decimal(0),
                new Decimal(0),
            ]
            game.green_spice_bought = [0n, 0n, 0n, 0n, 0n, 0n]
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
                new Decimal(350),
                new Decimal(100000),
                new Decimal(7 * 10 ** 9),
                new Decimal(1.5 * 10 ** 15),
                new Decimal(3 * 10 ** 22),
            ]
            game.green_strengthener_price = new Decimal(9000000)
            game.green_strengthener = 0

            game.blue_spice_gen = [
                new Decimal(0),
                new Decimal(0),
                new Decimal(0),
                new Decimal(0),
                new Decimal(0),
                new Decimal(0),
            ]
            game.blue_spice_bought = [0n, 0n, 0n, 0n, 0n, 0n]
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
                new Decimal(500),
                new Decimal(250000),
                new Decimal(3 * 10 ** 10),
                new Decimal(7.5 * 10 ** 15),
                new Decimal(2 * 10 ** 23),
            ]
            game.blue_strengthener_price = new Decimal(2.5 * 10 ** 7)
            game.blue_strengthener = 0

            game.pink_spice_gen = [
                new Decimal(0),
                new Decimal(0),
                new Decimal(0),
                new Decimal(0),
                new Decimal(0),
                new Decimal(0),
            ]
            game.pink_spice_bought = [0n, 0n, 0n, 0n, 0n, 0n]
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
                new Decimal(750),
                new Decimal(500000),
                new Decimal(10 ** 11),
                new Decimal(4 * 10 ** 16),
                new Decimal(10 ** 24),
            ]
            game.pink_strengthener_price = new Decimal(8 * 10 ** 7)
            game.pink_strengthener = 0

            game.color_boosts++
        } else {
            if (game.color_boosts >= 4) {
                if (game.collapse_challenge === 10) {
                    game.color_boosts =
                        Math.floor(
                            0.5 *
                                (9 -
                                    33 ** 0.5 -
                                    Math.cbrt(
                                        -8 * Number(game.pink_spice_bought[5]) -
                                            36 * 33 ** 0.5 +
                                            500
                                    ))
                        ) + 1
                } else {
                    if (game.pink_spice_bought[5] <= 150 * scaling) {
                        game.color_boosts =
                            Math.floor(
                                (Number(game.pink_spice_bought[5]) / scaling +
                                    50) /
                                    25
                            ) + 1
                    } else if (game.pink_spice_bought[5] <= 1200 * scaling) {
                        game.color_boosts =
                            Math.floor(
                                (Number(game.pink_spice_bought[5]) / scaling +
                                    250) /
                                    50
                            ) + 1
                    } else if (game.pink_spice_bought[5] <= 9000 * scaling) {
                        game.color_boosts =
                            Math.floor(
                                (Number(game.pink_spice_bought[5]) / scaling +
                                    975) /
                                    75
                            ) + 1
                    } else if (game.pink_spice_bought[5] <= 18000 * scaling) {
                        game.color_boosts =
                            Math.floor(
                                (Number(game.pink_spice_bought[5]) / scaling +
                                    4300) /
                                    100
                            ) + 1
                    } else if (game.pink_spice_bought[5] <= 63000 * scaling) {
                        game.color_boosts =
                            Math.floor(
                                (Number(game.pink_spice_bought[5]) / scaling +
                                    15450) /
                                    150
                            ) + 1
                    } else if (game.pink_spice_bought[5] <= 198600 * scaling) {
                        game.color_boosts =
                            Math.floor(
                                (Number(game.pink_spice_bought[5]) / scaling +
                                    41600) /
                                    200
                            ) + 1
                    } else if (game.pink_spice_bought[5] <= 1069500 * scaling) {
                        game.color_boosts =
                            Math.floor(
                                (Number(game.pink_spice_bought[5]) / scaling +
                                    161700) /
                                    300
                            ) + 1
                    } else if (game.pink_spice_bought[5] <= 2768000 * scaling) {
                        game.color_boosts =
                            Math.floor(
                                (Number(game.pink_spice_bought[5]) / scaling +
                                    982500) /
                                    500
                            ) + 1
                    } else if (
                        game.pink_spice_bought[5] <=
                        45270000 * scaling
                    ) {
                        game.color_boosts =
                            Math.floor(
                                (Number(game.pink_spice_bought[5]) / scaling +
                                    4733000) /
                                    1000
                            ) + 1
                    } else if (
                        game.pink_spice_bought[5] <=
                        (2500 * game.augment_start - 79737500) * scaling
                    ) {
                        game.color_boosts =
                            Math.floor(
                                (Number(game.pink_spice_bought[5]) / scaling +
                                    79737500) /
                                    2500
                            ) + 1
                    } else {
                        let amount = 2500 * game.augment_start - 79737500
                        game.color_boosts =
                            Math.floor(
                                (2 * game.augment_start -
                                    5001 +
                                    ((8 * Number(game.pink_spice_bought[5])) /
                                        scaling -
                                        8 * amount +
                                        25010001) **
                                        0.5) /
                                    2
                            ) + 1
                    }
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
        if (!override) {
            game.prestige++
            if (game.ascend_bought[21])
                game.prestige += Math.floor(game.color_boosts / 50)
        }
        let amount = new Decimal(0)
        if (game.color_boosts <= 16)
            amount = new Decimal(2).pow((game.color_boosts - 10) / 3)
        else amount = new Decimal(2).pow((game.color_boosts - 8) / 4)
        if (game.research_complete[31] >= 1 && game.collapse_challenge !== 12) {
            if (game.color_boosts >= game.augment_start) {
                let augment_amount = new Decimal(2).pow(
                    (game.augment_start - 8) / 4
                )
                amount = amount.div(augment_amount).pow(1.5).mul(augment_amount)
            }
        }
        if (
            game.ascend_bought[15] &&
            game.ascend_challenge !== 1 &&
            game.ascend_challenge !== 6 &&
            game.collapse_challenge !== 7 &&
            game.collapse_challenge !== 12
        ) {
            if (game.ascend < 10240)
                amount = amount.mul(Decimal.pow(2, game.ascend / 20))
            else
                amount = amount.mul(
                    Decimal.pow(2, 5 * (game.ascend - 7740) ** 0.5 + 262)
                )
        }

        if (game.antispice[4].cmp(1) >= 0) {
            let antispice_amount = game.antispice[4]
            if (antispice_amount.cmp(new Decimal(20000)) >= 0)
                antispice_amount = antispice_amount
                    .div(new Decimal(20000))
                    .pow(0.5)
                    .mul(new Decimal(20000))
            if (
                antispice_amount.cmp(Decimal.pow(10, 11).mul(2 * 5 ** 0.5)) >= 0
            )
                antispice_amount = antispice_amount
                    .div(Decimal.pow(10, 11).mul(2 * 5 ** 0.5))
                    .pow(0.5)
                    .mul(Decimal.pow(10, 11).mul(2 * 5 ** 0.5))

            if (game.collapse_challenge !== 0) {
                amount = amount.pow(
                    1 + antispice_amount.log(10) ** 0.75 * 0.0325
                )
            } else {
                amount = amount.pow(
                    1 + antispice_amount.log(10) ** 0.75 * 0.065
                )
            }
        }

        if (game.antispice_bought[2]) {
            amount = amount.pow(1.15)
        }

        game.rainbow_spice = game.rainbow_spice.add(amount)
        game.antitotal_spice[6] = game.antitotal_spice[6].add(amount)
        for (let i = 8; i >= 0; i--) {
            game.prestige_amount_history[i + 1] =
                game.prestige_amount_history[i]
            game.prestige_time_history[i + 1] = game.prestige_time_history[i]
        }
        game.prestige_amount_history[0] = amount
        game.prestige_time_history[0] = game.prestige_time_played

        game.prestige_time_played = 0
        game.real_time_played[1] = 0

        game.peak_rainbow_gain = new Decimal(0)
        game.peak_rainbow_amount = new Decimal(0)
        game.peak_rainbow_boosts = 0
        game.peak_rainbow_time = 0

        if (game.ascend_bought[9] && !override) {
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
        game.highest_crystal_spice = new Decimal(0)
        for (let i = 0; i < 6; i++) {
            game.crystal_spice_gen[i] = new Decimal(
                game.crystal_spice_bought[i].toString()
            )
        }
        game.crystal_infusion = 0n
        game.crystal_infusion_price = new Decimal(10)

        color_boost(true)
        game.color_boosts = game.prestige_bought[4]
        if (game.prestige_bought[4] < prestige_upgrade.upgrades[4].max) {
            game.subtab[0] = 0
            if (game.tab === 0) goto_subtab(game.subtab[0])
        }
    }
}

//code for ascending
function ascend(override) {
    let goal = Decimal.pow(2, 1024)
    if (game.ascend_challenge !== 0) {
        goal = ascension_challenge.challenges[game.ascend_challenge - 1].goal
    }

    if (game.rainbow_spice.cmp(goal) >= 0 && game.collapse_challenge !== 11) {
        let ascend_ready = false

        if (override || !game.ascend_confirm) ascend_ready = true
        else {
            if (
                confirm(
                    "您确定要转生吗？ 这将重置到目前为止的一切！"
                )
            ) {
                ascend_ready = true
            }
        }

        if (ascend_ready) {
            if (!override) {
                let total_completions = 0
                for (let i = 0; i < 6; i++) {
                    total_completions += game.collapse_complete[i]
                }

                if (game.research_complete[36] >= 1) {
                    let ascension_amount =
                        1 + (1.05 ** (total_completions - 55)) ** 2.7
                    if (ascension_amount >= 10000)
                        ascension_amount =
                            (ascension_amount / 10000) ** 0.5 * 10000
                    game.ascend += Math.floor(ascension_amount)
                } else game.ascend++
            }
            let amount = Math.floor(
                (game.rainbow_spice.log(Decimal.pow(2, 512)) / 2) ** 8
            )
            if (
                game.research_complete[10] >= 1 &&
                game.collapse_challenge !== 12
            )
                amount = Math.floor(
                    (game.rainbow_spice.log(Decimal.pow(2, 512)) / 2) ** 8 *
                        (Math.log2((game.collapse + 25) / 25) ** 2 * 6.27 + 1)
                )

            if (game.antispice[4].cmp(1) >= 0) {
                let antispice_amount = game.antispice[4]
                if (antispice_amount.cmp(new Decimal(20000)) >= 0)
                    antispice_amount = antispice_amount
                        .div(new Decimal(20000))
                        .pow(0.5)
                        .mul(new Decimal(20000))
                if (
                    antispice_amount.cmp(
                        Decimal.pow(10, 11).mul(2 * 5 ** 0.5)
                    ) >= 0
                )
                    antispice_amount = antispice_amount
                        .div(Decimal.pow(10, 11).mul(2 * 5 ** 0.5))
                        .pow(0.5)
                        .mul(Decimal.pow(10, 11).mul(2 * 5 ** 0.5))

                if (game.collapse_challenge !== 0) {
                    amount =
                        amount **
                        (1 + antispice_amount.log(10) ** 0.75 * 0.0325)
                } else {
                    amount =
                        amount ** (1 + antispice_amount.log(10) ** 0.75 * 0.065)
                }
            }

            if (game.antispice_bought[3]) {
                amount = amount ** 1.25
            }

            game.ansuz += amount

            let error = false

            if (game.research_complete[6] >= 1) {
                if (
                    game.autods_portion[0] +
                        game.autods_portion[1] +
                        game.autods_portion[2] >
                    1
                ) {
                    error = true
                }
                if (game.autods_portion[3] + game.autods_portion[4] > 1) {
                    error = true
                }
            }

            if (game.research_complete[4] >= 1 && !error) {
                if (game.research_complete[6] >= 1) {
                    if (game.ascend_bought[34]) {
                        game.autods_budget[1] += Math.floor(
                            amount * game.autods_portion[3]
                        )
                        game.autods_budget[2] += Math.floor(
                            amount * game.autods_portion[4]
                        )
                    } else {
                        game.autods_budget[0] += Math.floor(
                            amount * game.autods_portion[0]
                        )
                        game.autods_budget[1] += Math.floor(
                            amount * game.autods_portion[1]
                        )
                        game.autods_budget[2] += Math.floor(
                            amount * game.autods_portion[2]
                        )
                    }
                } else {
                    game.autods_budget[0] += Math.floor(
                        amount * game.autods_portion[0]
                    )
                }
            }

            for (let i = 8; i >= 0; i--) {
                game.ascend_amount_history[i + 1] =
                    game.ascend_amount_history[i]
                game.ascend_time_history[i + 1] = game.ascend_time_history[i]
            }
            game.ascend_amount_history[0] = amount
            game.ascend_time_history[0] = game.ascend_time_played

            game.ascend_time_played = 0
            game.real_time_played[2] = 0
            if (game.collapse_challenge === 7) game.ascend_challenge_timer = 0

            game.peak_ansuz_gain = 0
            game.peak_ansuz_amount = 0
            game.peak_ansuz_time = 0

            if (game.ascend_challenge !== 0) {
                game.ascend_complete[game.ascend_challenge - 1] = true
                game.ascend_challenge = 0
            }

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
                prestige_upgrade.upgrades[0].price = new Decimal(65536)
                game.prestige_bought[4] = 4
                prestige_upgrade.upgrades[4].price = new Decimal(2048)
                game.prestige_bought[7] = 1
                game.prestige_bought[13] = 1
                game.prestige_bought[15] = 1
                game.prestige_bought[22] = 1
            }

            game.arcane_spice = new Decimal(0)
            game.highest_arcane_spice = new Decimal(0)
            for (let i = 0; i < 6; i++) {
                game.arcane_spice_gen[i] = new Decimal(
                    game.arcane_spice_bought[i].toString()
                )
            }
            game.arcane_enchantment = 0n
            game.arcane_enchantment_price = new Decimal(25)

            game.free_enchantment = 0n
            if (
                game.research_complete[13] >= 1 &&
                game.collapse_challenge !== 12
            )
                game.free_enchantment = BigInt(game.arcane_strengthener) * 200n
            if (
                game.research_complete[25] >= 1 &&
                game.collapse_challenge !== 12
            ) {
                let collapse_free = BigInt(game.collapse) * 50n
                if (game.collapse >= 100000)
                    collapse_free = BigInt(
                        Math.floor(
                            2500000 * ((game.collapse - 87500) / 50000) ** 0.5 +
                                3750000
                        )
                    )
                if (game.collapse >= 31337500)
                    collapse_free = BigInt(game.collapse) + 34912500n
                if (collapse_free > game.arcane_enchantment / 2n)
                    collapse_free = game.arcane_enchantment / 2n

                game.free_enchantment += collapse_free
            }

            prestige(true)
            if (!game.ascend_bought[23] && game.research_complete[16] === 0)
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
            game.crystal_spice_bought = [0n, 0n, 0n, 0n, 0n, 0n]
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

            if (game.ascend === 1 && game.collapse === 0) {
                confirmations("ascend", true)
                confirmations("ascend", true)
            }
        }
    } else {
        if (override && game.collapse_challenge !== 11) {
            game.ascend_time_played = 0
            game.real_time_played[2] = 0
            if (game.collapse_challenge === 7) game.ascend_challenge_timer = 0

            game.peak_ansuz_gain = 0
            game.peak_ansuz_amount = 0
            game.peak_ansuz_time = 0

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
                game.prestige_bought[7] = 1
                game.prestige_bought[13] = 1
                game.prestige_bought[15] = 1
                game.prestige_bought[22] = 1
            }

            game.arcane_spice = new Decimal(0)
            game.highest_arcane_spice = new Decimal(0)
            for (let i = 0; i < 6; i++) {
                game.arcane_spice_gen[i] = new Decimal(
                    game.arcane_spice_bought[i].toString()
                )
            }
            game.arcane_enchantment = 0n
            game.arcane_enchantment_price = new Decimal(25)

            game.free_enchantment = 0n
            if (
                game.research_complete[13] >= 1 &&
                game.collapse_challenge !== 12
            )
                game.free_enchantment = BigInt(game.arcane_strengthener) * 200n
            if (
                game.research_complete[25] >= 1 &&
                game.collapse_challenge !== 12
            ) {
                let collapse_free = BigInt(game.collapse) * 50n
                if (game.collapse >= 100000)
                    collapse_free = BigInt(
                        Math.floor(
                            2500000 * ((game.collapse - 87500) / 50000) ** 0.5 +
                                3750000
                        )
                    )
                if (game.collapse >= 31337500)
                    collapse_free = BigInt(game.collapse) + 34912500n
                if (collapse_free > game.arcane_enchantment / 2n)
                    collapse_free = game.arcane_enchantment / 2n

                game.free_enchantment += collapse_free
            }

            prestige(true)
            if (!game.ascend_bought[23] && game.research_complete[16] === 0)
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
            game.crystal_spice_bought = [0n, 0n, 0n, 0n, 0n, 0n]
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

//code for collapsing
function collapse(override) {
    let amount = game.collapse_spice.pow(5 * 10 ** -10).floor()

    if (amount.cmp(Decimal.pow(10, 1800)) >= 0) {
        amount = amount
            .div(Decimal.pow(10, 200))
            .pow(10 / ((amount.log(10) * 0.3 - 56) ** 0.5 - 2))
            .mul(Decimal.pow(10, 200))

        if (amount.cmp(Decimal.pow(10, 20000)) >= 0)
            amount = Decimal.pow(
                10,
                20000 * (amount.log(10) / 20000) ** (2 / 3)
            )
    } else if (amount.cmp(Decimal.pow(10, 200)) >= 0) {
        amount = amount
            .div(Decimal.pow(10, 200))
            .pow(0.5)
            .mul(Decimal.pow(10, 200))
    }

    if (game.research_complete[5] >= 1 && game.collapse_challenge === 0) {
        let rune_amount = Decimal.pow(
            1.2,
            (game.total_rune_power / 10 ** 28) ** 0.2
        ).mul(game.total_rune_power ** 0.5 / (5 * 10 ** 12) + 1)
        if (rune_amount.cmp(Decimal.pow(10, 50)) >= 0)
            rune_amount = Decimal.pow(
                10,
                rune_amount.div(Decimal.pow(10, 50)).log(10) ** 0.5 + 50
            )
        if (rune_amount.cmp(Decimal.pow(10, 100)) >= 0)
            rune_amount = Decimal.pow(10, 200 - 10000 / rune_amount.log(10))

        amount = amount.mul(rune_amount)
    }

    let total_completions = 0
    for (let i = 0; i < 6; i++) {
        total_completions += game.collapse_complete[i]
    }
    if (game.research_complete[22] >= 1 && game.collapse_challenge === 0)
        amount = amount.mul(Decimal.pow(888, total_completions))

    let goal = new Decimal(1)
    if (game.collapse_challenge !== 0) {
        let c = collapse_challenge.challenges[game.collapse_challenge - 7]
        let completions = game.collapse_complete[game.collapse_challenge - 7]

        let temp_goal = c.goal.mul(c.delta.pow(completions))

        let extra = [1, 1, 1, 1, 1, 1]
        let superstep = c.goal.mul(c.delta.pow(Math.abs(c.scaling1) - 1))
        let superdelta = c.delta
        let step1 = c.goal
        if (c.scaling1 !== undefined) {
            if (c.scaling1 < 0) extra[0] = 0
            step1 = step1.mul(c.delta.pow(Math.abs(c.scaling1) - 1))
            if (completions >= Math.abs(c.scaling1))
                temp_goal = step1.mul(
                    c.delta2.pow(
                        completions - Math.abs(c.scaling1) + extra[0] + 1
                    )
                )

            superstep = step1.mul(
                c.delta2.pow(c.superscaling - Math.abs(c.scaling1) + extra[0])
            )
            superdelta = c.delta2
        }

        let step2 = step1
        if (c.scaling2 !== undefined) {
            if (c.scaling2 < 0) extra[1] = 0
            step2 = step2.mul(
                c.delta2.pow(
                    Math.abs(c.scaling2) - Math.abs(c.scaling1) + extra[0]
                )
            )
            if (completions >= Math.abs(c.scaling2))
                temp_goal = step2.mul(
                    c.delta3.pow(
                        completions - Math.abs(c.scaling2) + extra[1] + 1
                    )
                )

            superstep = step2.mul(
                c.delta3.pow(c.superscaling - Math.abs(c.scaling2) + extra[1])
            )
            superdelta = c.delta3
        }

        let step3 = step2
        if (c.scaling3 !== undefined) {
            if (c.scaling3 < 0) extra[2] = 0
            step3 = step3.mul(
                c.delta3.pow(
                    Math.abs(c.scaling3) - Math.abs(c.scaling2) + extra[1]
                )
            )
            if (completions >= Math.abs(c.scaling3))
                temp_goal = step3.mul(
                    c.delta4.pow(
                        completions - Math.abs(c.scaling3) + extra[2] + 1
                    )
                )

            superstep = step3.mul(
                c.delta4.pow(c.superscaling - Math.abs(c.scaling3) + extra[2])
            )
            superdelta = c.delta4
        }

        let step4 = step3
        if (c.scaling4 !== undefined) {
            if (c.scaling4 < 0) extra[3] = 0
            step4 = step4.mul(
                c.delta4.pow(
                    Math.abs(c.scaling4) - Math.abs(c.scaling3) + extra[2]
                )
            )
            if (completions >= Math.abs(c.scaling4))
                temp_goal = step4.mul(
                    c.delta5.pow(
                        completions - Math.abs(c.scaling4) + extra[3] + 1
                    )
                )

            superstep = step4.mul(
                c.delta5.pow(c.superscaling - Math.abs(c.scaling4) + extra[3])
            )
            superdelta = c.delta5
        }

        let step5 = step4
        if (c.scaling5 !== undefined) {
            if (c.scaling5 < 0) extra[4] = 0
            step5 = step5.mul(
                c.delta5.pow(
                    Math.abs(c.scaling5) - Math.abs(c.scaling4) + extra[3]
                )
            )
            if (completions >= Math.abs(c.scaling5))
                temp_goal = step5.mul(
                    c.delta6.pow(
                        completions - Math.abs(c.scaling5) + extra[4] + 1
                    )
                )

            superstep = step5.mul(
                c.delta6.pow(c.superscaling - Math.abs(c.scaling5) + extra[4])
            )
            superdelta = c.delta6
        }

        let step6 = step5
        if (c.scaling6 !== undefined) {
            if (c.scaling6 < 0) extra[5] = 0
            step6 = step6.mul(
                c.delta6.pow(
                    Math.abs(c.scaling6) - Math.abs(c.scaling5) + extra[4]
                )
            )
            if (completions >= Math.abs(c.scaling6))
                temp_goal = step6.mul(
                    c.delta7.pow(
                        completions - Math.abs(c.scaling6) + extra[5] + 1
                    )
                )

            superstep = step6.mul(
                c.delta7.pow(c.superscaling - Math.abs(c.scaling6) + extra[5])
            )
            superdelta = c.delta7
        }

        if (completions >= c.superscaling) {
            temp_goal = superstep.mul(
                superdelta.pow(
                    ((completions - c.superscaling + 2) *
                        (completions - c.superscaling + 3)) /
                        2 -
                        1
                )
            )
        }

        goal = temp_goal
    }

    if (
        (game.ascend_complete[5] || game.collapse_challenge === 11) &&
        amount.cmp(goal) >= 0
    ) {
        let collapse_ready = false

        if (override || !game.collapse_confirm) collapse_ready = true
        else {
            if (
                confirm(
                    "您确定要坍缩吗？ 这将重置到目前为止的一切！"
                )
            ) {
                collapse_ready = true
            }
        }

        if (collapse_ready) {
            if (!override) {
                if (game.research_complete[36] >= 1) {
                    let collapse_amount = 1 + 1.05 ** (total_completions - 55)
                    if (collapse_amount > 100)
                        collapse_amount = (collapse_amount / 100) ** 0.5 * 100
                    game.collapse += Math.floor(collapse_amount)
                } else game.collapse++
            }
            game.atomic_spice = game.atomic_spice.add(amount)

            game.unstable_spice = game.total_unstable_spice

            for (let i = 8; i >= 0; i--) {
                game.collapse_amount_history[i + 1] =
                    game.collapse_amount_history[i]
                game.collapse_time_history[i + 1] =
                    game.collapse_time_history[i]
            }
            game.collapse_amount_history[0] = amount
            game.collapse_time_history[0] = game.collapse_time_played

            let old_time = game.real_time_played[3]
            game.collapse_time_played = 0
            game.real_time_played[3] = 0
            game.collapse_spice = new Decimal(5)

            game.peak_atomic_gain = new Decimal(0)
            game.peak_atomic_amount = new Decimal(0)
            game.peak_atomic_time = 0

            if (game.collapse_challenge !== 0) {
                if (game.research_complete[28] >= 1) {
                    game.collapse_complete[game.collapse_challenge - 7] +=
                        game.pending_completions

                    game.pending_completions = 0
                } else game.collapse_complete[game.collapse_challenge - 7]++
                game.collapse_challenge = 0
            }

            game.ascend_challenge = 0
            game.ascend_complete = new Array(6).fill(false)

            if (game.subtab[3] > 1) game.subtab[3] = 0

            game.ascend_bought = new Array(35).fill(false)

            if (game.research_complete[1] >= 1) {
                game.ascend_bought[3] = true
                game.ascend_bought[8] = true
                game.ascend_bought[9] = true
                game.ascend_bought[10] = true
                game.ascend_bought[12] = true
                game.ascend_bought[17] = true
                game.ascend_bought[23] = true
                game.ascend_bought[25] = true
            }

            ascend(true)
            if (game.research_complete[16] === 0) {
                game.ascend = 0
                game.prestige = 0
            }
            game.ansuz = 0
            game.rune = new Array(3).fill(0)
            game.total_rune_power = 0

            game.autods_budget = [0, 0, 0]

            game.ascend_amount_history = new Array(10).fill(-1)
            game.ascend_time_history = new Array(10).fill(-1)

            game.arcane_spice_price = [
                20000,
                100000,
                600000,
                3.5 * 10 ** 7,
                3 * 10 ** 9,
                4 * 10 ** 11,
            ]
            game.arcane_spice_gen = [
                new Decimal(0),
                new Decimal(0),
                new Decimal(0),
                new Decimal(0),
                new Decimal(0),
                new Decimal(0),
            ]
            game.arcane_spice_bought = [0n, 0n, 0n, 0n, 0n, 0n]
            game.arcane_spice_boost = [
                new Decimal(1),
                new Decimal(1),
                new Decimal(1),
                new Decimal(1),
                new Decimal(1),
                new Decimal(1),
            ]
            game.arcane_strengthener = 0
            game.arcane_strengthener_price = 5000000

            game.free_enchantment = 0n
            if (
                game.research_complete[25] >= 1 &&
                game.collapse_challenge !== 12
            ) {
                let collapse_free = BigInt(game.collapse) * 50n
                if (game.collapse >= 100000)
                    collapse_free = BigInt(
                        Math.floor(
                            2500000 * ((game.collapse - 87500) / 50000) ** 0.5 +
                                3750000
                        )
                    )
                if (game.collapse >= 31337500)
                    collapse_free = BigInt(game.collapse) + 34912500n
                if (collapse_free > game.arcane_enchantment / 2n)
                    collapse_free = game.arcane_enchantment / 2n

                game.free_enchantment = collapse_free
            }

            game.global_spice_boost = new Decimal(1)

            let third_condition = true

            if (old_time < 0.5 && game.collider_animation)
                third_condition = false

            if (
                game.research_complete[34] >= 1 &&
                game.autosc_toggle &&
                third_condition
            )
                auto_collider()

            if (game.collapse === 1) {
                confirmations("collapse", true)
                confirmations("collapse", true)
            }
        }
    } else {
        if (override) {
            game.unstable_spice = game.total_unstable_spice

            game.collapse_time_played = 0
            game.real_time_played[3] = 0
            game.collapse_spice = new Decimal(5)

            game.peak_atomic_gain = new Decimal(0)
            game.peak_atomic_amount = new Decimal(0)
            game.peak_atomic_time = 0

            game.ascend_challenge = 0
            game.ascend_complete = new Array(6).fill(false)

            if (game.subtab[3] > 1) game.subtab[3] = 0

            game.ascend_bought = new Array(35).fill(false)

            if (game.research_complete[1] >= 1) {
                game.ascend_bought[3] = true
                game.ascend_bought[8] = true
                game.ascend_bought[9] = true
                game.ascend_bought[10] = true
                game.ascend_bought[12] = true
                game.ascend_bought[17] = true
                game.ascend_bought[23] = true
                game.ascend_bought[25] = true
            }

            ascend(true)
            if (game.research_complete[16] === 0) {
                game.ascend = 0
                game.prestige = 0
            }
            game.ansuz = 0
            game.rune = new Array(3).fill(0)
            game.total_rune_power = 0

            game.autods_budget = [0, 0, 0]

            game.ascend_amount_history = new Array(10).fill(-1)
            game.ascend_time_history = new Array(10).fill(-1)

            game.arcane_spice_price = [
                20000,
                100000,
                600000,
                3.5 * 10 ** 7,
                3 * 10 ** 9,
                4 * 10 ** 11,
            ]
            game.arcane_spice_gen = [
                new Decimal(0),
                new Decimal(0),
                new Decimal(0),
                new Decimal(0),
                new Decimal(0),
                new Decimal(0),
            ]
            game.arcane_spice_bought = [0n, 0n, 0n, 0n, 0n, 0n]
            game.arcane_spice_boost = [
                new Decimal(1),
                new Decimal(1),
                new Decimal(1),
                new Decimal(1),
                new Decimal(1),
                new Decimal(1),
            ]
            game.arcane_strengthener = 0
            game.arcane_strengthener_price = 5000000

            game.free_enchantment = 0n
            if (
                game.research_complete[25] >= 1 &&
                game.collapse_challenge !== 12
            ) {
                let collapse_free = BigInt(game.collapse) * 50n
                if (game.collapse >= 100000)
                    collapse_free = BigInt(
                        Math.floor(
                            2500000 * ((game.collapse - 87500) / 50000) ** 0.5 +
                                3750000
                        )
                    )
                if (game.collapse >= 31337500)
                    collapse_free = BigInt(game.collapse) + 34912500n
                if (collapse_free > game.arcane_enchantment / 2n)
                    collapse_free = game.arcane_enchantment / 2n

                game.free_enchantment = collapse_free
            }

            game.global_spice_boost = new Decimal(1)
        }
    }
}
