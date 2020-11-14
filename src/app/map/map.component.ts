import {Component, OnInit} from '@angular/core';
import VectorLayer from 'ol/layer/Vector';
import Map from 'ol/map';
import VectorSource from 'ol/source/Vector';
import TileLayer from 'ol/layer/Tile';
import {OSM} from 'ol/source';
import View from 'ol/View';
import * as olProj from 'ol/proj';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import Icon from 'ol/style/Icon';
import Style from 'ol/style/Style';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() {
  }

  private map: Map;
  private vectorlayer: VectorLayer;

  private ownPos: Feature<Point>;

  ngOnInit(): void {
    this.vectorlayer = new VectorLayer({
      source: new VectorSource()
    });

    this.map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM()
        }),
        this.vectorlayer
      ],
      view: new View({
        center: olProj.fromLonLat([7.51492, 51.490099]),
        zoom: 16
      }),
    });

    [[7.51492, 51.490099], [7.512656, 51.488831], [7.513984, 51.491797]].forEach(value => {
      this.addPoint(value);
    });

    this.updatePos();
  }

  public updatePos(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.setPos([position.coords.longitude, position.coords.latitude]);
      });
    }
  }

  public setPos(lonLan: number[]): Feature {
    if (this.ownPos) {
      this.vectorlayer.getSource().removeFeature(this.ownPos);
    }
    this.ownPos = new Feature<Point>(new Point(olProj.fromLonLat(lonLan)));
    this.ownPos.setStyle(new Style({image: new Icon({src: '../assets/baseline_location_on_black_18dp.png'})}));
    this.vectorlayer.getSource().addFeature(this.ownPos);
    return this.ownPos;
  }

  public addPoint(lonLan: number[]): Feature {
    const feature = new Feature<Point>(new Point(olProj.fromLonLat(lonLan)));
    feature.setStyle(new Style({image: new Icon({src: '../assets/baseline_qr_code_scanner_black_18dp.png'})}));
    this.vectorlayer.getSource().addFeature(feature);
    return feature;
  }
}