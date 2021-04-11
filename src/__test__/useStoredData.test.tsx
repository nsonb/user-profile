import {useStoredData} from '../hook/useStoredData'
// test that check the various functions of the useStoredData during the design and building the useStoredData custom hooks

// test names are self-explanatory
test('get init data', () => {
    () => {
        const {data} = useStoredData('testDate', 'init_test_date')
        expect(data).toBe('init_test_date')
    }
})

test('check setTestDate type is a function', () => {
    () => {
        const {setCurrentData} = useStoredData('testDate', 'init_test_date')
        expect(typeof setCurrentData === "function").toBe(true)
    }
})

test('check change data', () => {
    () => {
        const {data, setCurrentData} = useStoredData('testDate', 'init_test_date')
        typeof setCurrentData === "function"? setCurrentData('new_test_date') : null
        expect(data).toBe('new_test_date')
    }
})

test('check init data with nothing', () => {
    () => {
        const {data} = useStoredData('testDate')
        expect(data).toBe('')
    }
})

test('data persist after reload', () => {
    () => {
        const {data, setCurrentData} = useStoredData('testDate')
        typeof setCurrentData === "function"? setCurrentData('new_test_date') : null
        location.reload();
        expect(data).toBe('new_test_date')
    }
})

test('init with default value then change data and data persist after reload', () => {
    () => {
        const {data, setCurrentData} = useStoredData('testDate', 'init')
        typeof setCurrentData === "function"? setCurrentData('new_test_date') : null
        location.reload();
        expect(data).toBe('new_test_date')
    }
})