import React from 'react';
import { shallow } from 'enzyme';
import  { Route } from 'react-router-dom';
import  Home  from '../components/Home';
import Posts from '../components/Posts';
import Profile from '../components/Profile';
import RecycleGuide from '../components/RecycleGuide';
import App from '../App';

describe('testing routes are mapped correctly', () => {
    let pathMap = {};
    beforeAll(() => {
        const component = shallow(<App/>);
        pathMap = component.find(Route).reduce((pathMap, route) => {
            const routeProps = route.props();
            pathMap[routeProps.path] = routeProps.component;
            return pathMap;
          }, {});
          console.log(pathMap)
      })

    it('should have 5 routes', () => {
        let wrapper = shallow(<App />);
        expect(wrapper.find(Route)).toHaveLength(5);
    });

    it('should show Home component for / router ', () => {
        expect(pathMap['/']).toBe(Home);
    });

    it('should show Posts component for /posts router', () => {
        expect(pathMap['/posts']).toBe(Posts);
    });

    it('should show Profile component for /profile)', () => {
        expect(pathMap['/profile']).toBe(Profile);
    });

    it('should show Profile component for /recycle-guide', () => {
        expect(pathMap['/recycle-guide']).toBe(RecycleGuide);
    });
});




