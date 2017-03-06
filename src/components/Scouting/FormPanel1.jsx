// @flow
import React, { Component } from 'react';
import { Button, Col, OverlayTrigger, Panel, Row, Tooltip } from 'react-bootstrap';
import Winterfell from 'winterfell';
import { SortableContainer, SortableElement, SortableHandle, arrayMove } from 'react-sortable-hoc';
import schema from '../../schema';

const DragHandle = SortableHandle(() => <i className="material-icons">drag_handle</i>);

const header = (
  <div className="text-center">
    <DragHandle />
  </div>
);

const footer = (
  <Row>
    <Col xs={9} md={4}>
      <p>Required <i className="material-icons">check_box_outline_blank</i></p>
    </Col>
    <Col xsHidden md={6} />
    <Col xs={3} md={2} className="pull-right">
      <OverlayTrigger placement="top" overlay={<Tooltip>Duplicate</Tooltip>}>
        <Button><i className="material-icons">content_copy</i></Button>
      </OverlayTrigger>
      <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
        <Button bsStyle="danger"><i className="material-icons">delete</i></Button>
      </OverlayTrigger>
    </Col>
  </Row>
);

const SortableItem = SortableElement(({ formItem, index }) => (
  <Panel header={header} footer={footer} id={index}>
      { formItem }
    </Panel>
));

const SortableList = SortableContainer(({ formItem, items }) => (
  <ul>
    {formItem.map((formItem, index) =>
      <SortableItem key={`item-${index}`} index={index} formItems={formItem} />
    )}
  </ul>
));

class FormPanel extends Component {
  state = {
      formItems: [<Winterfell schema={schema} />, 'Item 3', 'Item 4', 'Item 5']
  }

  onSortEnd = ({oldIndex, newIndex}) => {
    let {formItems} = this.state;

    this.setState({
      formItems: arrayMove(formItems, oldIndex, newIndex)
    });
  };

  render() {
    let {formItems} = this.state;

    return (
      <SortableList formItem={formItems} onSortEnd={this.onSortEnd} useDragHandle={true} />
    )
  }
}

export default FormPanel;
