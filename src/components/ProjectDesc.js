import React from "react";
import {  Text,  List, ListItem } from "native-base";


export default function ProjectDesc ({desc}) {

  return (
    <List>
      <ListItem>
        <Text>Proyek Kecil {desc.small_project_price ? desc.small_project_price+' /m' : "tanyakan langsung"} {'\n'}<Text note>{desc.small_project_desc ? desc.small_project_desc : "tanyakan langsung"}</Text></Text>
      </ListItem>        
      <ListItem>
        <Text>Proyek Sedang  {desc.medium_project_price ? desc.medium_project_price+' /m' : "tanyakan langsung"} {'\n'}<Text note>{desc.medium_project_desc ? desc.medium_project_desc : "tanyakan langsung"}</Text></Text>
      </ListItem>
      <ListItem>
        <Text>Proyek Besar {desc.big_project_price ? desc.big_project_price+' /m' : "tanyakan langsung"} {'\n'}<Text note>{desc.big_project_desc ? desc.big_project_desc : "tanyakan langsung"}</Text></Text>
      </ListItem>
    </List>
  )
} 