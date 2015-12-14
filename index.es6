import React from 'react';
import List from '@economist/component-list';
import Button from '@economist/component-link-button';
import Balloon from '@economist/component-balloon';

export default class Accordion extends React.Component {

  static get propTypes(){
    return {
      list: React.PropTypes.array.isRequired,
    };
  }

  targetIfNeeded({ internal }) {
    if (internal === false) {
      return { target: '_blank' };
    }
    return {};
  }

  renderListContent(array) {
    let level = 0;
    return array.map((item) => {
      let linkContents = item.text || item.title;
      let listItem = '';
      const commonProps = {
        href: item.href,
        key: `${item.title}-${item.href}`,
        unstyled: true,
      };
      if (item.meta) {
        commonProps.icon = {
          icon: item.meta,
          size: '28px',
        };
      }
      if (item.internal === false) {
        listItem = (
          <Button
            className="accordion__link accordion__link--external"
            {...commonProps}
            target="_blank"
          >
            {linkContents}
          </Button>
        );
      } else {
        listItem = (<Button className="accordion__link" {...commonProps}>
        {linkContents}
        </Button>);
      }
      // Recursive part
      if (item.children && item.children.length > 0) {
        level++;
        listItem = (<Balloon className={`accordion__level${level}`}
            key={`${item.title}-${item.href}-level${level}`}
          >
          {listItem}
          <List>
            {this.renderListContent(item.children)}
          </List>
        </Balloon>);
      }
      level = 0;
      return listItem;
    });
  }

  render() {
    const context = this.props.list;
    return (
      <List className="accordion">
        {this.renderListContent(context)}
      </List>
    );
  }
}
