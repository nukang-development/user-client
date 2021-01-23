import React from 'react';
import { StyleSheet } from 'react-native'
import { Container, Button, Content, Card, CardItem, Text, Body } from "native-base"

export default function Order() {

  return (
    <>
        <Container style={styles.container}>
          <Content>
            <Card>
              <CardItem header>
                <Text>Nama User</Text>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>
                    Total: Rp.1.000.000
                  </Text>
                </Body>
              </CardItem>
              <CardItem footer>
                <Text>Schedule: 29-02-2021</Text>
              </CardItem>
              <Button small rounded success style={{marginBottom:20}}>
                <Text >Done</Text>
              </Button>
            </Card>
          </Content>
        </Container>
      
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8c291',
  },
});