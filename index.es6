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

  renderListContent(array, level) {
    level++;

    return array.map((item, i) => {
      let listItem = '';
      let classNameList = ['accordion__link'];
      const commonProps = {
        href: item.href,
        key: `${i}`,
      };
      // Spread icon props.
      if (item.icon || (item.children && item.children.length > 0)) {
        commonProps.icon = {
          ...item.icon,
          size: '28px',
        }
      }
      // Add the arrow down for expandable links
      if (item.children && item.children.length > 0) {
        commonProps.icon.icon = "down";
      }

      if (item.i13nModel) {
        commonProps.i13nModel = item.i13nModel;
      }

      if (item.target) {
        commonProps.target = item.target;
      }

      if (item.target === "_blank"){
        classNameList.push('accordion__link--external');
      }
      // By default we want the component unstyled.
      // But overridable via prop.
      commonProps.unstyled = item.unstyled !== false;

      if (item.className) {
        const list = item.className.split(" ");
        classNameList = classNameList.concat(list);
      }
      commonProps.className = `${classNameList.join(' ')}`;

      listItem = (<Button  {...commonProps}>
        {item.title}
      </Button>);
      // Recursive part
      if (item.children && item.children.length > 0) {
        listItem = (<Balloon
            prefix="accordionExpander"
            className={`accordion__level${level}`}
            unstyled
            key={`level${level}-${i}`}
            trigger={listItem}
          >
          <List>
            {this.renderListContent(item.children, level)}
          </List>
        </Balloon>);
      }
      return listItem;
    });
  }

  render() {
    const context = this.props.list;
    const level = 0;
    return (
      <List className="accordion">
        {this.renderListContent(context, level)}
      </List>
    );
  }
}
