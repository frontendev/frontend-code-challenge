import React from 'react';
import '../style/app.sass';
import House from './ui-house/index.jsx';
import HouseDinamic from './ui-house/dinamic.jsx';

export default class App extends React.Component {
  render() {
    return (
      <section className="container-fluid">
        <section className="container">
          <h1>Static</h1>
          <div className="row">
            <House
              urlImage="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Stephenking_house.JPG/640px-Stephenking_house.JPG"
              title="Elf Wohnungen auf einmal - 5% Mietrendite! MFH in Ettlingen - Schöll"
              purpose="0"
              location="35764 Sinn / Fleisbach"
              price="1.954"
              rooms="3"
              size="35"
              />
            <House
              urlImage="https://upload.wikimedia.org/wikipedia/commons/8/88/The_Slab_House_Inn_-_geograph.org.uk_-_179195.jpg"
              title="Hotel mit 24 Zi, Schwimmbad, Restaurant Biergarten und Betriberwoh"
              purpose="0"
              location="35764 Sinn / Fleisbach"
              price="1.349"
              rooms="2"
              size="29"
              />
            <House
              urlImage="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Galena_IL_Elihu_B._Washburne_House1.JPG/640px-Galena_IL_Elihu_B._Washburne_House1.JPG"
              title="Denkmalgeschütztes Mehrfamilienhaus in Waghäusel"
              purpose="1"
              location="35764 Sinn / Fleisbach"
              price="2.341"
              rooms="4"
              size="44"
              />
          </div>
        </section>
        <section className="container">
          <div className="row">
            <HouseDinamic />
          </div>
        </section>
      </section>
    );
  }
}