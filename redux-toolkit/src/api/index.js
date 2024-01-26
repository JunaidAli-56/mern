import Chance from 'chance';

const chance = Chance()
// itsjust a function not component
export const fakeUserData = () => {
    console.log(chance.name({ middle: true }))
    return chance.name({ middle: true })
}

// fakeUserData();