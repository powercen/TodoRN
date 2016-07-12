import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  StyleSheet,
  Image,
  Dimensions
} from 'react-native';
import {
  Bar,
  Main,
} from '../components/edit-view';
let {height, width} = Dimensions.get('window');
import { COLOR_GREEN, COLOR_BROWN, COLOR_RED, ACTIVE_OPACITY } from '../constants/Theme';
import Actions from '../actions';

class HomeView extends Component {
  constructor(props){
    super(props);
    this.state = {forData: {}}
  }
  hide = ()=>{
    this.props.navigator.pop();
  }
  handleUpdate = (data)=>{
    this.setState({forData: data});
  }
  handleCancel = ()=>{
    this.hide();
  }
  handleOK = ()=>{
    this.props.actions.addTodo(this.state.forData.title, this.state.forData.hour);
    this.hide();
  }
  render() {
    return (
      <Image style={styles.container} source={require('../components/edit-view/img/bg.png')}>
        <Main onUpdate={this.handleUpdate}/>
        <Bar onCancel={this.handleCancel} onOK={this.handleOK}/>
      </Image>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height
  }
});

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeView);
