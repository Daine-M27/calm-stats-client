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


import React from 'react';
import {shallow} from 'enzyme';

import App from './App';

describe('<App/>', () => {



    it('Renders without crashing', () => {
        shallow(<App />);
    });

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