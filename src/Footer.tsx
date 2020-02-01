import React from 'react'
import { Component } from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';
import {
  Container,
  Footer
} from 'native-base';

type Props = {};
export default class App extends Component<Props> {

  render() {
    return (
      <Container style={styles.container}>
        <Footer style={styles.footer}>
          <Text> footer </Text>
        </Footer>
      </Container>
      // <View style={{ flex: 1 }}>
      //   <View style={{ flex: 1 }}>
      //     {/* Your screen contents depending on current tab. */}
      //   </View>
      //   {/* <BottomNavigation
      //     activeTab={this.state.activeTab}
      //     onTabPress={newTab => this.setState({ activeTab: newTab.key })}
      //     renderTab={this.renderTab}
      //     tabs={this.tabs}
      //   /> */}
      // </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  footer: {
    alignItems: "center",
    justifyContent: "center"
  }
});