import {advantagesReducer, AdvantagesStateType,
    addAdvantage, deleteAdvantage, updateAdvantageTitle, clearAdvantages
} from "./advantages-reducer"

let startState: AdvantagesStateType = { advantages: [] }

beforeEach(() => {
    startState = ({
        advantages: [
            { id: 'advantageId1', title: 'React' },
            { id: 'advantageId2', title: 'Vue' }
        ]
    })
})

test('new advantage should be added', () => {

    const newAdvantage = { id: 'advantageId3', title: 'Angular' }
    const action = addAdvantage(newAdvantage)
    const endState = advantagesReducer(startState, action)

    expect(endState.advantages.length).toBe(3)
    expect(endState.advantages[2].id).toBe('advantageId3')
    expect(endState.advantages[2].title).toBe('Angular')
})

test('advantage text should be updated', () => {

    const updatedAdvantage = { id: 'advantageId2', title: 'New Vue' }
    const action = updateAdvantageTitle(updatedAdvantage)
    const endState = advantagesReducer(startState, action)

    expect(endState.advantages.length).toBe(2)
    expect(endState.advantages[1].title).toBe('New Vue')
})

test('advantage should be deleted', () => {

    const endState = advantagesReducer(startState, deleteAdvantage({id: 'advantageId1'}))

    expect(endState.advantages.length).toBe(1)
    expect(endState.advantages[0].title).toBe('Vue')
})

test('all advantages should be deleted', () => {

    const endState = advantagesReducer(startState, clearAdvantages())
    expect(endState.advantages.length).toBe(0)
})