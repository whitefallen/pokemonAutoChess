import { Effect } from "../enum/Effect"
import { Damage, Stat } from "../enum/Game"
import { Status } from "../enum/Status"
import { Synergy } from "../enum/Synergy"
import { Weather } from "../enum/Weather"

export const EffectName: { [key in Effect]: string } = {
  [Effect.INGRAIN]: `Ingrain`,
  [Effect.GROWTH]: `Growth`,
  [Effect.SPORE]: `Spore`,
  [Effect.BLAZE]: `Blaze`,
  [Effect.VICTORY_STAR]: `Victory Star`,
  [Effect.DROUGHT]: `Drought`,
  [Effect.DESOLATE_LAND]: `Desolate Land`,
  [Effect.DRIZZLE]: `Drizzle`,
  [Effect.RAIN_DANCE]: `Rain Dance`,
  [Effect.PRIMORDIAL_SEA]: `Primordial Sea`,
  [Effect.STAMINA]: `Stamina`,
  [Effect.STRENGTH]: `Strength`,
  [Effect.PURE_POWER]: `Pure Power`,
  [Effect.ROCK_SMASH]: `Rock Smash`,
  [Effect.RISING_VOLTAGE]: `Rising Voltage`,
  [Effect.OVERDRIVE]: `Overdrive`,
  [Effect.GUTS]: `Guts`,
  [Effect.DEFIANT]: `Defiant`,
  [Effect.JUSTIFIED]: `Justified`,
  [Effect.AMNESIA]: `Amnesia`,
  [Effect.LIGHT_SCREEN]: `Light Screen`,
  [Effect.EERIE_SPELL]: `Eerie Spell`,
  [Effect.HONE_CLAWS]: `Hone Claws`,
  [Effect.ASSURANCE]: `Assurance`,
  [Effect.BEAT_UP]: `Beat Up`,
  [Effect.IRON_DEFENSE]: `Iron Defense`,
  [Effect.AUTOMATE]: `Automate`,
  [Effect.STEEL_SURGE]: "Steel Surge",
  [Effect.TILLER]: `Tiller`,
  [Effect.DIGGER]: `Digger`,
  [Effect.DRILLER]: `Driller`,
  [Effect.POISONOUS]: `Poisonous`,
  [Effect.VENOMOUS]: `Venomous`,
  [Effect.TOXIC]: `Toxic`,
  [Effect.DRAGON_ENERGY]: `Dragon Energy`,
  [Effect.DRAGON_SCALES]: `Dragon Scales`,
  [Effect.DRAGON_DANCE]: `Dragon Dance`,
  [Effect.BULK_UP]: `Bulk Up`,
  [Effect.RAGE]: `Rage`,
  [Effect.ANGER_POINT]: `Anger Point`,
  [Effect.PURSUIT]: `Pursuit`,
  [Effect.BRUTAL_SWING]: `Brutal Swing`,
  [Effect.POWER_TRIP]: `Power Trip`,
  [Effect.MEDITATE]: `Meditate`,
  [Effect.FOCUS_ENERGY]: `Focus Energy`,
  [Effect.CALM_MIND]: `Calm Mind`,
  [Effect.INFESTATION]: `Infestation`,
  [Effect.HORDE]: `Horde`,
  [Effect.HEART_OF_THE_SWARM]: `Heart Of The Swarm`,
  [Effect.SWIFT_SWIM]: `Swift Swim`,
  [Effect.HYDRATION]: `Hydration`,
  [Effect.WATER_VEIL]: `Water Veil`,
  [Effect.TAILWIND]: `Tailwind`,
  [Effect.FEATHER_DANCE]: `Feather Dance`,
  [Effect.MAX_AIRSTREAM]: `Max Airstream`,
  [Effect.MAX_GUARD]: `Max Guard`,
  [Effect.ODD_FLOWER]: `Odd Flower`,
  [Effect.GLOOM_FLOWER]: `Gloom Flower`,
  [Effect.VILE_FLOWER]: `Vile Flower`,
  [Effect.SUN_FLOWER]: `Sun Flower`,
  [Effect.BATTLE_ARMOR]: `Battle Armor`,
  [Effect.MOUTAIN_RESISTANCE]: `Moutain Resistance`,
  [Effect.DIAMOND_STORM]: `Diamond Storm`,
  [Effect.PHANTOM_FORCE]: `Phantom Force`,
  [Effect.CURSE]: `Curse`,
  [Effect.SHADOW_TAG]: `Shadow Tag`,
  [Effect.WANDERING_SPIRIT]: `Wandering Spirit`,
  [Effect.AROMATIC_MIST]: `Aromatic Mist`,
  [Effect.FAIRY_WIND]: `Fairy Wind`,
  [Effect.STRANGE_STEAM]: `Strange Steam`,
  [Effect.CHILLY]: `Chilly`,
  [Effect.FROSTY]: `Frosty`,
  [Effect.FREEZING]: `Freezing`,
  [Effect.SHEER_COLD]: `Sheer Cold`,
  [Effect.ANCIENT_POWER]: `Ancient Power`,
  [Effect.ELDER_POWER]: `Elder Power`,
  [Effect.FORGOTTEN_POWER]: `Forgotten Power`,
  [Effect.LARGO]: `Largo`,
  [Effect.ALLEGRO]: `Allegro`,
  [Effect.PRESTO]: `Presto`,
  [Effect.DUBIOUS_DISC]: `Dubious Disc`,
  [Effect.LINK_CABLE]: `Link Cable`,
  [Effect.GOOGLE_SPECS]: `Google Specs`,
  [Effect.HATCHER]: `Hatcher`,
  [Effect.BREEDER]: `Breeder`,
  [Effect.TELEPORT_NEXT_ATTACK]: `Teleport`,
  [Effect.GRASSY_TERRAIN]: "Grassy Terrain",
  [Effect.PSYCHIC_TERRAIN]: "Psychic Terrain",
  [Effect.ELECTRIC_TERRAIN]: "Electric Terrain",
  [Effect.MISTY_TERRAIN]: "Misty Terrain",
  [Effect.SANDSTORM]: "Sandstorm",
  [Effect.SNOW]: "Snow",
  [Effect.SUN]: "Sun",
  [Effect.RAIN]: "Rain",
  [Effect.STORM]: "Storm",
  [Effect.MISTY]: "Misty",
  [Effect.WINDY]: "Windy",
  [Effect.NIGHT]: "Night",
  [Effect.HYDRATATION]: "Hydratation"
}

export const EffectDescription: {
  [key in Effect]: { eng: string; esp: string; fra: string }
} = {
  [Effect.STAMINA]: {
    eng: `Gain 15 ${Stat.SHIELD}`,
    esp: `20 ${Stat.SHIELD}`,
    fra: `20 ${Stat.SHIELD}`
  },
  [Effect.STRENGTH]: {
    eng: `Gain 30 ${Stat.SHIELD}`,
    esp: `40 ${Stat.SHIELD}`,
    fra: `40 ${Stat.SHIELD}`
  },
  [Effect.ROCK_SMASH]: {
    eng: `Gain 45 ${Stat.SHIELD}`,
    esp: `60 ${Stat.SHIELD}`,
    fra: `60 ${Stat.SHIELD}`
  },
  [Effect.PURE_POWER]: {
    eng: `Gain 60 ${Stat.SHIELD}`,
    esp: `80 ${Stat.SHIELD}`,
    fra: `80 ${Stat.SHIELD}`
  },
  [Effect.INGRAIN]: {
    eng: `Restore 5 ${Stat.HP} per second`,
    esp: ``,
    fra: ``
  },
  [Effect.GROWTH]: {
    eng: `Restore 10 ${Stat.HP} per second`,
    esp: ``,
    fra: ``
  },
  [Effect.SPORE]: {
    eng: `Restore 18 ${Stat.HP} per second`,
    esp: ``,
    fra: ``
  },
  [Effect.BLAZE]: {
    eng: `20% chance to ${Status.BURN}`,
    esp: ``,
    fra: ``
  },
  [Effect.VICTORY_STAR]: {
    eng: `20% chance to ${Status.BURN}, +1 ${Stat.ATK} after every hit`,
    esp: ``,
    fra: ``
  },
  [Effect.DROUGHT]: {
    eng: `30% chance to ${Status.BURN}, +2 ${Stat.ATK} after every hit`,
    esp: ``,
    fra: ``
  },
  [Effect.DESOLATE_LAND]: {
    eng: `40% chance to ${Status.BURN}, +3 ${Stat.ATK} after every hit`,
    esp: ``,
    fra: ``
  },
  [Effect.RAIN_DANCE]: {
    eng: `30% chance to dodge. Fish a pokemon after every PvP fight.`,
    esp: ``,
    fra: ``
  },
  [Effect.DRIZZLE]: {
    eng: `50% chance to dodge. Rare pokemons can be fished.`,
    esp: ``,
    fra: ``
  },
  [Effect.PRIMORDIAL_SEA]: {
    eng: `70% chance to dodge. Epic pokemons can be fished.`,
    esp: ``,
    fra: ``
  },
  [Effect.RISING_VOLTAGE]: {
    eng: `Every fourth attack is a triple attack`,
    esp: ``,
    fra: ``
  },
  [Effect.OVERDRIVE]: {
    eng: `Every third attack is a triple attack`,
    esp: ``,
    fra: ``
  },
  [Effect.GUTS]: {
    eng: `Blocks 4 damage`,
    esp: ``,
    fra: ``
  },
  [Effect.DEFIANT]: {
    eng: `Blocks 7 damage`,
    esp: ``,
    fra: ``
  },
  [Effect.JUSTIFIED]: {
    eng: `Blocks 10 damage`,
    esp: ``,
    fra: ``
  },
  [Effect.AMNESIA]: {
    eng: `+50% ${Stat.AP}`,
    esp: ``,
    fra: ``
  },
  [Effect.LIGHT_SCREEN]: {
    eng: `+100% ${Stat.AP}`,
    esp: ``,
    fra: ``
  },
  [Effect.EERIE_SPELL]: {
    eng: `+150% ${Stat.AP}`,
    esp: ``,
    fra: ``
  },
  [Effect.HONE_CLAWS]: {
    eng: `Gain +40% ${Stat.CRIT_CHANCE} and +25% ${Stat.CRIT_DAMAGE}`,
    esp: ``,
    fra: ``
  },
  [Effect.ASSURANCE]: {
    eng: `Gain +60% ${Stat.CRIT_CHANCE} and +50% ${Stat.CRIT_DAMAGE}`,
    esp: ``,
    fra: ``
  },
  [Effect.BEAT_UP]: {
    eng: `Gain +80% ${Stat.CRIT_CHANCE} and +75% ${Stat.CRIT_DAMAGE}`,
    esp: ``,
    fra: ``
  },
  [Effect.IRON_DEFENSE]: {
    eng: `One of your steel Pokemon gains double base ${Stat.ATK}`,
    esp: ``,
    fra: ``
  },
  [Effect.AUTOMATE]: {
    eng: `All of your steel Pokemon gains double base ${Stat.ATK}`,
    esp: ``,
    fra: ``
  },
  [Effect.STEEL_SURGE]: {
    eng: `All of your steel Pokemon gains double base ${Stat.ATK}. One gets triple base ${Stat.ATK}`,
    esp: "",
    fra: ""
  },
  [Effect.TILLER]: {
    eng: `Gain +1 ${Stat.ATK} / ${Stat.DEF} / ${Stat.SPE_DEF}`,
    esp: ``,
    fra: ``
  },
  [Effect.DIGGER]: {
    eng: `Gain +2 ${Stat.ATK} / ${Stat.DEF} / ${Stat.SPE_DEF}`,
    esp: ``,
    fra: ``
  },
  [Effect.DRILLER]: {
    eng: `Gain +3  ${Stat.ATK} / ${Stat.DEF} / ${Stat.SPE_DEF}`,
    esp: ``,
    fra: ``
  },
  [Effect.POISONOUS]: {
    eng: `30% chance to ${Status.POISON}`,
    esp: ``,
    fra: ``
  },
  [Effect.VENOMOUS]: {
    eng: `50% chance to ${Status.POISON}. Max stacks of ${Status.POISON} +1`,
    esp: ``,
    fra: ``
  },
  [Effect.TOXIC]: {
    eng: `70% chance to ${Status.POISON}. Max stacks of ${Status.POISON} +2`,
    esp: ``,
    fra: ``
  },
  [Effect.DRAGON_ENERGY]: {
    eng: `Dragon's second synergy counts double (not the third)`,
    esp: ``,
    fra: ``
  },
  [Effect.DRAGON_SCALES]: {
    eng: `Dragons gain 30 ${Stat.HP} per evolution stage (3 for Mythicals)`,
    esp: ``,
    fra: ``
  },
  [Effect.DRAGON_DANCE]: {
    eng: `Dragons gain 10% ${Stat.ATK_SPEED} and 10% ${Stat.AP} per evolution stage (3 for Mythicals)`,
    esp: ``,
    fra: ``
  },
  [Effect.BULK_UP]: {
    eng: `Heal 30 ${Stat.HP} and gain 20% ${Stat.ATK_SPEED}`,
    esp: ``,
    fra: ``
  },
  [Effect.RAGE]: {
    eng: `Heal 30 ${Stat.HP} and gain 25% ${Stat.ATK_SPEED}`,
    esp: ``,
    fra: ``
  },
  [Effect.ANGER_POINT]: {
    eng: `Heal 30 ${Stat.HP} and gain 30% ${Stat.ATK_SPEED}`,
    esp: ``,
    fra: ``
  },
  [Effect.PURSUIT]: {
    eng: `When knocking down its target, gain 3 ${Stat.ATK} and 30 max ${Stat.HP}`,
    esp: ``,
    fra: ``
  },
  [Effect.BRUTAL_SWING]: {
    eng: `When knocking down its target, gain 6 ${Stat.ATK} and 60 max ${Stat.HP}`,
    esp: ``,
    fra: ``
  },
  [Effect.POWER_TRIP]: {
    eng: `When knocking down its target, gain 9 ${Stat.ATK} and 90 max ${Stat.HP}`,
    esp: ``,
    fra: ``
  },
  [Effect.MEDITATE]: {
    eng: `Heal for 10% ${Stat.HP} of the damage`,
    esp: ``,
    fra: ``
  },
  [Effect.FOCUS_ENERGY]: {
    eng: `Heal for 25% ${Stat.HP} of the damage`,
    esp: ``,
    fra: ``
  },
  [Effect.CALM_MIND]: {
    eng: `Heal for 50% ${Stat.HP} of the damage`,
    esp: ``,
    fra: ``
  },
  [Effect.SWIFT_SWIM]: {
    eng: `35% chance to burn 20 ${Stat.MANA} and return 15 ${Stat.MANA} to the attacker`,
    esp: ``,
    fra: `?NONE?`
  },
  [Effect.HYDRATION]: {
    eng: `45% chance to burn 20 ${Stat.MANA} and return 30 ${Stat.MANA} to the attacker`,
    esp: ``,
    fra: ``
  },
  [Effect.WATER_VEIL]: {
    eng: `55% chance to burn 20 ${Stat.MANA} and return 45 ${Stat.MANA} to the attacker`,
    esp: ``,
    fra: ``
  },
  [Effect.INFESTATION]: {
    eng: `Copy 1 bug pokemon`,
    esp: ``,
    fra: ``
  },
  [Effect.HORDE]: {
    eng: `Copy 2 bug pokemons`,
    esp: ``,
    fra: ``
  },
  [Effect.HEART_OF_THE_SWARM]: {
    eng: `Copy 4 bug pokemons`,
    esp: ``,
    fra: ``
  },
  [Effect.TAILWIND]: {
    eng: `Fly away once under 20% ${Stat.HP}`,
    esp: ``,
    fra: ``
  },
  [Effect.FEATHER_DANCE]: {
    eng: `Get ${Status.PROTECT} for 1.5 seconds after flying away`,
    esp: ``,
    fra: ``
  },
  [Effect.MAX_AIRSTREAM]: {
    eng: `Fly away twice when under 50% ${Stat.HP} and 20% ${Stat.HP}`,
    esp: ``,
    fra: ``
  },
  [Effect.MAX_GUARD]: {
    eng: `When flying away, enemies around are ${Status.PARALYSIS} for 2 seconds`,
    esp: ``,
    fra: ``
  },
  [Effect.ODD_FLOWER]: {
    eng: `Summon Oddish`,
    esp: ``,
    fra: ``
  },
  [Effect.GLOOM_FLOWER]: {
    eng: `Summon Gloom`,
    esp: ``,
    fra: ``
  },
  [Effect.VILE_FLOWER]: {
    eng: `Summon Vileplume`,
    esp: ``,
    fra: ``
  },
  [Effect.SUN_FLOWER]: {
    eng: `Summon Bellossom`,
    esp: ``,
    fra: ``
  },
  [Effect.BATTLE_ARMOR]: {
    eng: `Gain 5 ${Stat.DEF}, receive -30% critical damage`,
    esp: ``,
    fra: ``
  },
  [Effect.MOUTAIN_RESISTANCE]: {
    eng: `Gain 10 ${Stat.DEF}, receive -50% critical damage`,
    esp: ``,
    fra: ``
  },
  [Effect.DIAMOND_STORM]: {
    eng: `Gain 20 ${Stat.DEF}, receive -70% critical damage`,
    esp: ``,
    fra: ``
  },
  [Effect.PHANTOM_FORCE]: {
    eng: `Deal 20% of ${Stat.ATK} as ${Damage.TRUE}`,
    esp: ``,
    fra: ``
  },
  [Effect.CURSE]: {
    eng: `Deal 40% of ${Stat.ATK} as ${Damage.TRUE}`,
    esp: ``,
    fra: ``
  },
  [Effect.SHADOW_TAG]: {
    eng: `Deal 70% of ${Stat.ATK} as ${Damage.TRUE}`,
    esp: ``,
    fra: ``
  },
  [Effect.WANDERING_SPIRIT]: {
    eng: `Deal 100% of ${Stat.ATK} as ${Damage.TRUE}`,
    esp: ``,
    fra: ``
  },
  [Effect.AROMATIC_MIST]: {
    eng: `Shocks deal 10 ${Damage.SPECIAL}`,
    esp: ``,
    fra: ``
  },
  [Effect.FAIRY_WIND]: {
    eng: `Shocks deal 30 ${Damage.SPECIAL}`,
    esp: ``,
    fra: ``
  },
  [Effect.STRANGE_STEAM]: {
    eng: `Shocks deal 55 ${Damage.SPECIAL}`,
    esp: ``,
    fra: ``
  },
  [Effect.CHILLY]: {
    eng: `+3 ${Stat.SPE_DEF}, 10% chance to ${Status.FREEZE}`,
    esp: ``,
    fra: ``
  },
  [Effect.FROSTY]: {
    eng: `+6 ${Stat.SPE_DEF}, 20% chance to ${Status.FREEZE}`,
    esp: ``,
    fra: ``
  },
  [Effect.FREEZING]: {
    eng: `+10 ${Stat.SPE_DEF}, 30% chance to ${Status.FREEZE}`,
    esp: ``,
    fra: ``
  },
  [Effect.SHEER_COLD]: {
    eng: `+15 ${Stat.SPE_DEF}, 40% chance to ${Status.FREEZE}`,
    esp: ``,
    fra: ``
  },
  [Effect.ANCIENT_POWER]: {
    eng: `Revive with 40% ${Stat.HP} and +30% ${Stat.ATK}`,
    esp: ``,
    fra: ``
  },
  [Effect.ELDER_POWER]: {
    eng: `Revive with 80% ${Stat.HP} and +60% ${Stat.ATK}.`,
    esp: ``,
    fra: ``
  },
  [Effect.FORGOTTEN_POWER]: {
    eng: `Revive with 100% ${Stat.HP} and +100% ${Stat.ATK}.`,
    esp: ``,
    fra: ``
  },
  [Effect.LARGO]: {
    eng: `Ally team gains +1 ${Stat.ATK}`,
    esp: ``,
    fra: ``
  },
  [Effect.ALLEGRO]: {
    eng: `Ally team gains +1 ${Stat.ATK} and +5% ${Stat.ATK_SPEED}`,
    esp: ``,
    fra: ``
  },
  [Effect.PRESTO]: {
    eng: `Ally team gains +1 ${Stat.ATK}, +5% ${Stat.ATK_SPEED} and 3 ${Stat.MANA}`,
    esp: ``,
    fra: ``
  },
  [Effect.DUBIOUS_DISC]: {
    eng: `Gain +10% base ${Stat.ATK}, ${Stat.AP} and max ${Stat.HP} as ${Stat.SHIELD} per held item`,
    esp: ``,
    fra: ``
  },
  [Effect.LINK_CABLE]: {
    eng: `Gain +20% base ${Stat.ATK}, ${Stat.AP} and max ${Stat.HP} as ${Stat.SHIELD} per held item`,
    esp: ``,
    fra: ``
  },
  [Effect.GOOGLE_SPECS]: {
    eng: `Gain +30% base ${Stat.ATK}, ${Stat.AP}  and max ${Stat.HP} as ${Stat.SHIELD} per held item`,
    esp: ``,
    fra: ``
  },
  [Effect.HATCHER]: {
    eng: `20% chance per consecutive defeat to get an Egg`,
    esp: ``,
    fra: ``
  },
  [Effect.BREEDER]: {
    eng: `Get an Egg after each defeat against a player`,
    esp: ``,
    fra: ``
  },
  [Effect.TELEPORT_NEXT_ATTACK]: {
    eng: `Next attack will deal additional ${Damage.SPECIAL}`,
    esp: ``,
    fra: ``
  },
  [Effect.GRASSY_TERRAIN]: {
    eng: "Increase damage dealt by 20% (Grass only)",
    esp: "",
    fra: ""
  },
  [Effect.PSYCHIC_TERRAIN]: {
    eng: "Increase damage dealt by 20% (Psychic only)",
    esp: "",
    fra: ""
  },
  [Effect.ELECTRIC_TERRAIN]: {
    eng: "Increase damage dealt by 20% (Electric only)",
    esp: "",
    fra: ""
  },
  [Effect.MISTY_TERRAIN]: {
    eng: "Increase damage dealt by 20% (Fairy only)",
    esp: "",
    fra: ""
  },
  [Effect.SANDSTORM]: {
    eng: `5 ${Damage.SPECIAL} per second (${Synergy.GROUND} are immune)\n${Status.CONFUSION} duration +30%`,
    esp: "",
    fra: ""
  },
  [Effect.SNOW]: {
    eng: `-25% base ${Stat.ATK_SPEED}\n+30% ${Status.FREEZE} duration`,
    esp: "",
    fra: ""
  },
  [Effect.SUN]: {
    eng: `+30% ${Status.BURN} damage\n-30% ${Status.FREEZE} duration`,
    esp: "",
    fra: ""
  },
  [Effect.RAIN]: {
    eng: `+3 ${Stat.MANA} per second\n-30% ${Status.BURN} and ${Status.POISON} damage`,
    esp: "",
    fra: ""
  },
  [Effect.STORM]: {
    eng: `Lightning randomly falls on the board (${Synergy.ELECTRIC} are immune)\n+30% ${Status.PARALYSIS} duration`,
    esp: "",
    fra: ""
  },
  [Effect.MISTY]: {
    eng: `+20% ${Damage.SPECIAL}\n+30% ${Status.SILENCE} duration`,
    esp: "",
    fra: ""
  },
  [Effect.WINDY]: {
    eng: `+10% dodge chance (+20% if ${Synergy.FLYING})`,
    esp: "",
    fra: ""
  },
  [Effect.NIGHT]: {
    eng: `+20% ${Stat.CRIT_CHANCE}\n+30% ${Status.SLEEP} duration`,
    esp: "",
    fra: ""
  },
  [Effect.HYDRATATION]: {
    eng: `${Synergy.GRASS} synergy is healing 5 additional ${Stat.HP} per second under the ${Weather.RAIN}`,
    esp: "",
    fra: ""
  }
}
