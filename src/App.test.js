// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
//
// console.log(App);
//
//
// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
// });

import Auth from './Auth/Auth';

import React from 'react';
import {shallow} from 'enzyme';

import App from './App';
import Dashboard from "./components/dashboard";
import YouTube from 'react-youtube';
import SearchResult from './components/searchResult';
import StatisticSheet from './components/statisticSheet';


const auth = new Auth();
class LocalStorageMock {
    constructor() {
        this.store = {};
    }

    clear() {
        this.store = {};
    }

    getItem(key) {
        return this.store[key] || null;
    }

    setItem(key, value) {
        this.store[key] = value.toString();
    }

    removeItem(key) {
        delete this.store[key];
    }
};

global.localStorage = new LocalStorageMock;

describe('<App/>', () => {



    it('Renders without crashing', () => {
        shallow(<App />);
    });

    // it('Renders the dashboard', () => {
    //     shallow(<Dashboard auth={auth}/>);
    // });

    it('Renders the search result', () => {
        const loadVideo = jest.fn;
        const obj = {
            snippet: {thumbnails:{default:{}}}
        };
        obj.snippet.title = "some-title";
        obj.snippet.thumbnails.default.url = "https://i.ytimg.com/vi/1vx8iUvfyCY/default.jpg";
        obj.snippet.description = "some-description";

        shallow(<SearchResult key={1} videoLoader={loadVideo} {...obj}/>);
    });

    it('Renders the statistic sheet', () => {
        const title = "some title";
        const data = "22";
        shallow(<StatisticSheet title={title} dataValue={data}/>)

    })


    // it('Renders the title', () => {
    //     const title = "Foo";
    //     const wrapper = shallow(<Board title={title} />);
    //     expect(wrapper.contains(<h2>{title}</h2>)).toEqual(true);
    // });
    //
    //
    // it('Can add lists to the state', () => {
    //     const wrapper = shallow(<Board/>);
    //     const instance = wrapper.instance();
    //     seedLists.forEach(instance.addList);
    //     expect(wrapper.state('lists').length).toEqual(seedLists.length);
    // });
    //
    // it('Renders the lists', () => {
    //     const wrapper = shallow(<Board/>);
    //     const instance = wrapper.instance();
    //     seedLists.forEach(instance.addList);
    //     const lists = wrapper.find('List');
    //     expect(lists.length).toEqual(seedLists.length);
    //     const firstList = lists.first();
    //     expect(firstList.prop('title')).toEqual(seedLists[0]);
    // });
});