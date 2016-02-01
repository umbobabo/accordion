import Accordion from '../index.es6';
import List from '@economist/component-list';
import React from 'react/addons';
import chai from 'chai';
import chaiSpies from 'chai-spies';
chai.use(chaiSpies).should();
import context from '@economist/component-sections-card/context';

describe(`An Accordion`, () => {
  describe(`it's a React component`, () => {
    it('is compatible with React.Component', () => {
      Accordion.should.be.a('function').and.respondTo('render');
    });
    it('renders a React element', () => {
      React.isValidElement(<Accordion list={[context]}/>).should.equal(true);
    });
  });
});
