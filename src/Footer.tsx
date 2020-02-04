import React from 'react'
import {
  StyleSheet,
  Text,
} from 'react-native';
import {
  Container,
  Footer,
  FooterTab,
  Button,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

type Props = {
  tab: Tab,
  onPressed: (t: Tab) => void
};
enum Tab {
  Home,
  Plus,
  Timer,
  Setting
}
export default function VFooter(props: Props) {
  const {
    tab,
    onPressed
  } = props;

    return (
      <Container style={styles.container}>
        <Footer>
        <FooterTab>
          <Button
            active={tab === Tab.Home}
            onPress={() => onPressed(Tab.Home)}
          >
            <Icon name="home" size={30} />
            <Text>Home</Text>
          </Button>
          <Button
            active={tab === Tab.Plus}
            onPress={() => onPressed(Tab.Plus)}
          >
            <Icon name="plus" size={30} />
            <Text>Plus</Text>
          </Button>
          <Button
            active={tab === Tab.Timer}
            onPress={() => onPressed(Tab.Timer)}
          >
            <Icon name="hourglass-start" size={30} />
            <Text>Timer</Text>
          </Button>
          <Button
            active={tab === Tab.Setting}
            onPress={() => onPressed(Tab.Setting)}
          >
            <Icon name="cog" size={30} />
            <Text>Setting</Text>
          </Button>
        </FooterTab>
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

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
});