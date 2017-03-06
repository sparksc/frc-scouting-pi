// @flow
import React, { Component } from 'react';
import { Button, Col, OverlayTrigger, Panel, Row, Tooltip } from 'react-bootstrap';
import Form from 'react-jsonschema-form';
import { SortableContainer, SortableElement, SortableHandle, arrayMove } from 'react-sortable-hoc';
// import formSchema from '../../formSchema';

const DragHandle = SortableHandle(() => <i className="material-icons">drag_handle</i>);

const schema = {
  title: 'Question',
  type: 'object',
  required: ['title'],
  properties: {
    title: { type: 'string', title: 'Title', default: 'Question Title' },
    done: { type: 'boolean', title: 'Done?', default: false },
  },
};

const log = type => console.log.bind(console, type);

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
  <li>
    <Panel header={header} footer={footer} id={index}>
      { formItem }
    </Panel>
  </li>
));

const SortableList = SortableContainer(({ formItem, items }) => (
  <ul>
    {items.map(index =>
      <SortableItem key={`item-${index}`} index={index} formItems={formItem} />,
    )}
  </ul>
));

class FormPanel extends Component {
  componentDidMount() {
    // If the schema properties is empty, then try to load the schema from the
    if (Object.keys(this.props.schema.properties).length === 0) {
      this.props.loadSchema(this.props.params.id, (data) => {
        document.title = data.schema.title;
      });
    }
  }

  state = {
        formItems: [<Form schema={schema} />, <Form schema={schema} />, 'Item 3', 'Item 4', 'Item 5', 'Item 6']
    }

  onSortEnd = ({oldIndex, newIndex}) => {
        let {formItems} = this.state;

        this.setState({
            items: arrayMove(formItems, oldIndex, newIndex)
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
