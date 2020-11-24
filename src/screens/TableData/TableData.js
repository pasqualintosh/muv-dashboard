import React, { Component } from 'react'
import { Container, Row, Col, Form, ListGroup, Jumbotron, Table } from "react-bootstrap";


export class TableData extends Component {
    render() {
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Utente</th>
                        <th>Km piedi</th>
                        <th>Tempo piedi</th>
                        <th>Km bici</th>
                        <th>Tempo bici</th>
                        <th>Km tpl</th>
                        <th>Tempo tpl</th>
                        <th>Km mezzo privato</th>
                        <th>Tempo mezzo privato</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Giulio Grimaldi</td>
                        <td>72.1 km</td>
                        <td>14 ore 54 min</td>
                        <td>72.1 km</td>
                        <td>6 ore 12 min</td>
                        <td>23.2 km</td>
                        <td>1 ora 28 min</td>
                        <td>65.5 km</td>
                        <td>56 min</td>
                    </tr>
                    <tr>
                        <td>Federica Masseroni</td>
                        <td>14.6 km</td>
                        <td>3 ore 0 min</td>
                        <td>14.6 km</td>
                        <td>1 ora 15 min</td>
                        <td></td>
                        <td></td>
                        <td>15.9 km</td>
                        <td>25 min</td>
                    </tr>
                    <tr>
                        <td>Barbara Santesarti</td>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                        <td>1.1 km</td>
                        <td>10 min</td>
                        <td>null</td>
                        <td>null</td>
                    </tr>
                    <tr>
                        <td>stefano M</td>
                        <td>0.9 km</td>
                        <td>11 min</td>
                        <td>0.9 km</td>
                        <td>4 min</td>
                        <td>14.3 km</td>
                        <td>52 min</td>
                        <td>1.6 km</td>
                        <td>7 min</td>
                    </tr>
                    <tr>
                        <td>valentina silvestri</td>
                        <td>11.2 km</td>
                        <td>2 ore 16 min</td>
                        <td>11.2 km</td>
                        <td>56 min</td>
                        <td>13.2 km</td>
                        <td>52 min</td>
                        <td>11.2 km</td>
                        <td>21 min</td>
                    </tr>
                    <tr>
                        <td>Sergio Marino</td>
                        <td>10.1 km</td>
                        <td>2 ore 5 min</td>
                        <td>10.1 km</td>
                        <td>52 min</td>
                        <td>9.9 km</td>
                        <td>55 min</td>
                        <td>12.0 km</td>
                        <td>20 min</td>
                    </tr>
                    <tr>
                        <td>Fabiola Scucchia</td>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                    </tr>
                    <tr>
                        <td>Roberta Sale</td>
                        <td>8.4 km</td>
                        <td>1 ora 45 min</td>
                        <td>8.4 km</td>
                        <td>43 min</td>
                        <td>4.0 km</td>
                        <td>20 min</td>
                        <td>12.4 km</td>
                        <td>20 min</td>
                    </tr>
                    <tr>
                        <td>Carla Schiavoni</td>
                        <td>19.5 km</td>
                        <td>4 ore 3 min</td>
                        <td>19.5 km</td>
                        <td>1 ora 41 min</td>
                        <td>24.3 km</td>
                        <td>1 ora 9 min</td>
                        <td>29.6 km</td>
                        <td>30 min</td>
                    </tr>
                    <tr>
                        <td>Valerio Coltella</td>
                        <td>71.1 km</td>
                        <td>14 ore 46 min</td>
                        <td>71.1 km</td>
                        <td>6 ore 9 min</td>
                        <td>9.9 km</td>
                        <td>55 min</td>
                        <td>66.2 km</td>
                        <td>59 min</td>
                    </tr>
                    <tr>
                        <td>Pfazio</td>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                        <td>4.0 km</td>
                        <td>20 min</td>
                        <td>null</td>
                        <td>null</td>
                    </tr>
                    <tr>
                        <td>alberto toso</td>
                        <td>2.8 km</td>
                        <td>35 min</td>
                        <td>2.8 km</td>
                        <td>14 min</td>
                        <td>17.8 km</td>
                        <td>1 ora 13 min</td>
                        <td>3.9 km</td>
                        <td>10 min</td>
                    </tr>
                    <tr>
                        <td>Isilda Epifano</td>
                        <td>7.3 km</td>
                        <td>1 ora 31 min</td>
                        <td>7.3 km</td>
                        <td>37 min</td>
                        <td>9.5 km</td>
                        <td>35 min</td>
                        <td>13.1 km</td>
                        <td>22 min</td>
                    </tr>
                    <tr>
                        <td>Gianfranco Di Simone</td>
                        <td>10.2 km</td>
                        <td>2 ore 7 min</td>
                        <td>10.2 km</td>
                        <td>52 min</td>
                        <td>13.9 km</td>
                        <td>56 min</td>
                        <td>7.6 km</td>
                        <td>21 min</td>
                    </tr>
                    <tr>
                        <td>Jenny Corredor</td>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                        <td>592 km</td>
                        <td>5 ore 8 min</td>
                        <td>null</td>
                        <td>null</td>
                    </tr>
                    <tr>
                        <td>Michele Poli</td>
                        <td>6.9 km</td>
                        <td>1 ora 26 min</td>
                        <td>6.9 km</td>
                        <td>35 min</td>
                        <td>8.8 km</td>
                        <td>49 min</td>
                        <td>7.5 km</td>
                        <td>15 min</td>
                    </tr>
                    <tr>
                        <td>Giuseppe Vassia</td>
                        <td>2.8 km</td>
                        <td>35 min</td>
                        <td>2.8 km</td>
                        <td>14 min</td>
                        <td>4.6 km</td>
                        <td>26 min</td>
                        <td>3.1 km</td>
                        <td>9 min</td>
                    </tr>
                    <tr>
                        <td>Marco Gradella</td>
                        <td>623 km</td>
                        <td>5 giorni 6 ore</td>
                        <td>623 km</td>
                        <td>52 ore 31 min</td>
                        <td>9.6 km</td>
                        <td>37 min</td>
                        <td>656 km</td>
                        <td>6 ore 24 min</td>
                    </tr>
                    <tr>
                        <td>Maria Stella Tanzarella</td>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                        <td>591 km</td>
                        <td>5 ore 10 min</td>
                        <td>null</td>
                        <td>null</td>
                    </tr>
                    <tr>
                        <td>Valeria Indelicato</td>
                        <td>11.1 km</td>
                        <td>2 ore 17 min</td>
                        <td>11.1 km</td>
                        <td>57 min</td>
                        <td>5.1 km</td>
                        <td>23 min</td>
                        <td>13.4 km</td>
                        <td>21 min</td>
                    </tr>
                    <tr>
                        <td>Matteo d'Aloja</td>
                        <td>4.7 km</td>
                        <td>57 min</td>
                        <td>4.7 km</td>
                        <td>23 min</td>
                        <td>6.2 km</td>
                        <td>25 min</td>
                        <td>5.2 km</td>
                        <td>16 min</td>
                    </tr>
                    <tr>
                        <td>Giovanni Bassi</td>
                        <td>2.5 km</td>
                        <td>31 min</td>
                        <td>2.5 km</td>
                        <td>13 min</td>
                        <td>13.0 km</td>
                        <td>59 min</td>
                        <td>2.9 km</td>
                        <td>9 min</td>
                    </tr>
                    <tr>
                        <td>Gabriele D'Acuti</td>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                    </tr>
                    <tr>
                        <td>Andrea Mariotti</td>
                        <td>26.6 km</td>
                        <td>5 ore 29 min</td>
                        <td>26.6 km</td>
                        <td>2 ore 17 min</td>
                        <td>null</td>
                        <td>null</td>
                        <td>31.9 km</td>
                        <td>37 min</td>
                    </tr>
                    <tr>
                        <td>Patrizia viri</td>
                        <td>4.0 km</td>
                        <td>49 min</td>
                        <td>4.0 km</td>
                        <td>20 min</td>
                        <td>26.2 km</td>
                        <td>1 ora 26 min</td>
                        <td>4.7 km</td>
                        <td>13 min</td>
                    </tr>
                    <tr>
                        <td>MARIA TERESA LATORRE</td>
                        <td>25.5 km</td>
                        <td>5 ore 13 min</td>
                        <td>25.5 km</td>
                        <td>2 ore 10 min</td>
                        <td>4.9 km</td>
                        <td>31 min</td>
                        <td>30.8 km</td>
                        <td>38 min</td>
                    </tr>
                    <tr>
                        <td>PAOLO PAVONE</td>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                        <td>39.4 km</td>
                        <td>1 ora 13 min</td>
                        <td>null</td>
                        <td>null</td>
                    </tr>
                    <tr>
                        <td>Cecilia Ravalli</td>
                        <td>37.0 km</td>
                        <td>7 ore 35 min</td>
                        <td>37.0 km</td>
                        <td>3 ore 9 min</td>
                        <td>0.7 km</td>
                        <td>8 min</td>
                        <td>58.1 km</td>
                        <td>55 min</td>
                    </tr>
                    <tr>
                        <td>Giandomenico Faviere</td>
                        <td>12.0 km</td>
                        <td>2 ore 30 min</td>
                        <td>12.0 km</td>
                        <td>1 ora 2 min</td>
                        <td>36.3 km</td>
                        <td>54 min</td>
                        <td>17.7 km</td>
                        <td>23 min</td>
                    </tr>
                    <tr>
                        <td>Paolo Mazzocchi</td>
                        <td>45.7 km</td>
                        <td>9 ore 28 min</td>
                        <td>45.7 km</td>
                        <td>3 ore 56 min</td>
                        <td>13.9 km</td>
                        <td>1 ora 8 min</td>
                        <td>42.0 km</td>
                        <td>44 min</td>
                    </tr>
                    <tr>
                        <td>Gianluca Caroletta</td>
                        <td>2.8 km</td>
                        <td>34 min</td>
                        <td>2.8 km</td>
                        <td>14 min</td>
                        <td>20.6 km</td>
                        <td>50 min</td>
                        <td>3.1 km</td>
                        <td>9 min</td>
                    </tr>
                    <tr>
                        <td>Vincenzo Costantino</td>
                        <td>7.6 km</td>
                        <td>1 ora 34 min</td>
                        <td>7.6 km</td>
                        <td>39 min</td>
                        <td>3.8 km</td>
                        <td>23 min</td>
                        <td>9.7 km</td>
                        <td>15 min</td>
                    </tr>
                    <tr>
                        <td>Daniele Bonanni</td>
                        <td>20.3 km</td>
                        <td>4 ore 6 min</td>
                        <td>20.3 km</td>
                        <td>1 ora 42 min</td>
                        <td>8.7 km</td>
                        <td>32 min</td>
                        <td>37.6 km</td>
                        <td>38 min</td>
                    </tr>
                    <tr>
                        <td>Giulia Papa</td>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                    </tr>
                    <tr>
                        <td>Massimo Maffucci</td>
                        <td>44.0 km</td>
                        <td>8 ore 55 min</td>
                        <td>44.0 km</td>
                        <td>3 ore 42 min</td>
                        <td>5.2 km</td>
                        <td>23 min</td>
                        <td>41.9 km</td>
                        <td>39 min</td>
                    </tr>
                    <tr>
                        <td>ARTA PRIFTI</td>
                        <td>8.1 km</td>
                        <td>1 ora 40 min</td>
                        <td>8.1 km</td>
                        <td>41 min</td>
                        <td>8.9 km</td>
                        <td>35 min</td>
                        <td>9.9 km</td>
                        <td>15 min</td>
                    </tr>
                    <tr>
                        <td>Riccardo Trentino</td>
                        <td>8.5 km</td>
                        <td>1 ora 48 min</td>
                        <td>8.5 km</td>
                        <td>45 min</td>
                        <td>9.2 km</td>
                        <td>34 min</td>
                        <td>10.8 km</td>
                        <td>23 min</td>
                    </tr>
                    <tr>
                        <td>Michelina Nobile</td>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                        <td>23.4 km</td>
                        <td>1 ora 17 min</td>
                        <td>null</td>
                        <td>null</td>
                    </tr>
                    <tr>
                        <td>daniela baldini</td>
                        <td>20.3 km</td>
                        <td>4 ore 9 min</td>
                        <td>20.3 km</td>
                        <td>1 ora 43 min</td>
                        <td>1.5 km</td>
                        <td>11 min</td>
                        <td>24.9 km</td>
                        <td>31 min</td>
                    </tr>
                    <tr>
                        <td>Alessia Giaquinto</td>
                        <td>0.8 km</td>
                        <td>10 min</td>
                        <td>0.8 km</td>
                        <td>4 min</td>
                        <td>5.2 km</td>
                        <td>28 min</td>
                        <td>11.4 km</td>
                        <td>17 min</td>
                    </tr>
                    <tr>
                        <td>Piero Conti</td>
                        <td>9.6 km</td>
                        <td>1 ora 58 min</td>
                        <td>9.6 km</td>
                        <td>49 min</td>
                        <td>11.2 km</td>
                        <td>59 min</td>
                        <td>1.6 km</td>
                        <td>5 min</td>
                    </tr>
                    <tr>
                        <td>Diego De Angelis</td>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                        <td>0.6 km</td>
                        <td>8 min</td>
                        <td>null</td>
                        <td>null</td>
                    </tr>
                    <tr>
                        <td>Feidy Cedeno</td>
                        <td>6.2 km</td>
                        <td>1 ora 14 min</td>
                        <td>6.2 km</td>
                        <td>31 min</td>
                        <td>6.9 km</td>
                        <td>26 min</td>
                        <td>8.5 km</td>
                        <td>20 min</td>
                    </tr>
                    <tr>
                        <td>Aldo Marchini</td>
                        <td>0.6 km</td>
                        <td>8 min</td>
                        <td>0.6 km</td>
                        <td>3 min</td>
                        <td>16.1 km</td>
                        <td>57 min</td>
                        <td>6.2 km</td>
                        <td>14 min</td>
                    </tr>
                    <tr>
                        <td>Veronica Zaccaro</td>
                        <td>6.4 km</td>
                        <td>1 ora 20 min</td>
                        <td>6.4 km</td>
                        <td>33 min</td>
                        <td>7.5 km</td>
                        <td>40 min</td>
                        <td>0.7 km</td>
                        <td>3 min</td>
                    </tr>
                    <tr>
                        <td>Fabrizio Benamati</td>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                        <td>104 km</td>
                        <td>2 ore 31 min</td>
                        <td>null</td>
                        <td>null</td>
                    </tr>
                    <tr>
                        <td>Alba Schiano Fischetti</td>
                        <td>9.9 km</td>
                        <td>2 ore 6 min</td>
                        <td>9.9 km</td>
                        <td>52 min</td>
                        <td>115 km</td>
                        <td>1 ora 55 min</td>
                        <td>11.8 km</td>
                        <td>24 min</td>
                    </tr>
                    <tr>
                        <td>Davide Di Vito</td>
                        <td>5.9 km</td>
                        <td>1 ora 14 min</td>
                        <td>5.9 km</td>
                        <td>30 min</td>
                        <td>10.7 km</td>
                        <td>42 min</td>
                        <td>7.6 km</td>
                        <td>19 min</td>
                    </tr>
                    <tr>
                        <td>JOYCE BOU FADEL</td>
                        <td>102 km</td>
                        <td>20 ore 54 min</td>
                        <td>102 km</td>
                        <td>8 ore 42 min</td>
                        <td>9.3 km</td>
                        <td>47 min</td>
                        <td>122 km</td>
                        <td>1 ora 49 min</td>
                    </tr>
                    <tr>
                        <td>Mirko Orilio</td>
                        <td>13.9 km</td>
                        <td>2 ore 55 min</td>
                        <td>13.9 km</td>
                        <td>1 ora 13 min</td>
                        <td>null</td>
                        <td>null</td>
                        <td>233 km</td>
                        <td>2 ore 29 min</td>
                    </tr>
                    <tr>
                        <td>Marco Guglielmino</td>
                        <td>29.0 km</td>
                        <td>5 ore 53 min</td>
                        <td>29.0 km</td>
                        <td>2 ore 26 min</td>
                        <td>206 km</td>
                        <td>2 ore 24 min</td>
                        <td>21.8 km</td>
                        <td>28 min</td>
                    </tr>
                    <tr>
                        <td>GIUSEPPE CANDIRACCI</td>
                        <td>232 km</td>
                        <td>2 giorni 0 ore</td>
                        <td>232 km</td>
                        <td>19 ore 59 min</td>
                        <td>16.2 km</td>
                        <td>1 ora 11 min</td>
                        <td>41.1 km</td>
                        <td>46 min</td>
                    </tr>
                    <tr>
                        <td>Andrea Cefaro</td>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                        <td>17.1 km</td>
                        <td>57 min</td>
                        <td>null</td>
                        <td>null</td>
                    </tr>
                    <tr>
                        <td>Maria Serena Mirco</td>
                        <td>24.4 km</td>
                        <td>5 ore 3 min</td>
                        <td>24.4 km</td>
                        <td>2 ore 6 min</td>
                        <td>31.5 km</td>
                        <td>1 ora 6 min</td>
                        <td>14.1 km</td>
                        <td>21 min</td>
                    </tr>
                    <tr>
                        <td>Giulia Agrippina Santarelli</td>
                        <td>10.3 km</td>
                        <td>2 ore 7 min</td>
                        <td>10.3 km</td>
                        <td>52 min</td>
                        <td>10.4 km</td>
                        <td>32 min</td>
                        <td>34.1 km</td>
                        <td>41 min</td>
                    </tr>
                    <tr>
                        <td>Francesca Paracini</td>
                        <td>32.7 km</td>
                        <td>6 ore 48 min</td>
                        <td>32.7 km</td>
                        <td>2 ore 50 min</td>
                        <td>10.4 km</td>
                        <td>52 min</td>
                        <td>13.3 km</td>
                        <td>32 min</td>
                    </tr>
                    <tr>
                        <td>Valentina Grippa</td>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                        <td>28.4 km</td>
                        <td>1 ora 19 min</td>
                        <td>null</td>
                        <td>null</td>
                    </tr>
                    <tr>
                        <td>Francesca Lavorgna</td>
                        <td>3.0 km</td>
                        <td>37 min</td>
                        <td>3.0 km</td>
                        <td>15 min</td>
                        <td>4.1 km</td>
                        <td>19 min</td>
                        <td>4.3 km</td>
                        <td>12 min</td>
                    </tr>
                    <tr>
                        <td>ATOUSA AKHLAGHIù</td>
                        <td>26.8 km</td>
                        <td>5 ore 18 min</td>
                        <td>26.8 km</td>
                        <td>2 ore 12 min</td>
                        <td>3.0 km</td>
                        <td>19 min</td>
                        <td>44.7 km</td>
                        <td>48 min</td>
                    </tr>
                    <tr>
                        <td>silvia bellisari</td>
                        <td>3.4 km</td>
                        <td>41 min</td>
                        <td>3.4 km</td>
                        <td>16 min</td>
                        <td>22.5 km</td>
                        <td>1 ora 17 min</td>
                        <td>4.7 km</td>
                        <td>13 min</td>
                    </tr>
                    <tr>
                        <td>Simona Pupi</td>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                        <td>112 km</td>
                        <td>3 ore 14 min</td>
                        <td>null</td>
                        <td>null</td>
                    </tr>
                    <tr>
                        <td>Daniele Antonini</td>
                        <td>11.2 km</td>
                        <td>2 ore 19 min</td>
                        <td>11.2 km</td>
                        <td>57 min</td>
                        <td>3.5 km</td>
                        <td>20 min</td>
                        <td>120 km</td>
                        <td>1 ora 24 min</td>
                    </tr>
                    <tr>
                        <td>Enrico Ghella</td>
                        <td>3.0 km</td>
                        <td>36 min</td>
                        <td>3.0 km</td>
                        <td>15 min</td>
                        <td>10.4 km</td>
                        <td>32 min</td>
                        <td>13.0 km</td>
                        <td>22 min</td>
                    </tr>
                    <tr>
                        <td>Mauro Pantarotto</td>
                        <td>126 km</td>
                        <td>1 giorno 2 ore</td>
                        <td>126 km</td>
                        <td>10 ore 42 min</td>
                        <td>12.8 km</td>
                        <td>1 ora 13 min</td>
                        <td>3.3 km</td>
                        <td>9 min</td>
                    </tr>
                    <tr>
                        <td>milla baricordi</td>
                        <td>11.6 km</td>
                        <td>2 ore 24 min</td>
                        <td>11.6 km</td>
                        <td>59 min</td>
                        <td>null</td>
                        <td>null</td>
                        <td>13.7 km</td>
                        <td>30 min</td>
                    </tr>
                    <tr>
                        <td>Francesco Ficarazzo</td>
                        <td>5.4 km</td>
                        <td>1 ora 6 min</td>
                        <td>5.4 km</td>
                        <td>27 min</td>
                        <td>6.5 km</td>
                        <td>28 min</td>
                        <td>8.2 km</td>
                        <td>17 min</td>
                    </tr>
                    <tr>
                        <td>alessandro cortani</td>
                        <td>25.8 km</td>
                        <td>5 ore 12 min</td>
                        <td>25.8 km</td>
                        <td>2 ore 9 min</td>
                        <td>14.0 km</td>
                        <td>51 min</td>
                        <td>42.4 km</td>
                        <td>44 min</td>
                    </tr>
                    <tr>
                        <td>Loredana Matteocci</td>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                    </tr>
                    <tr>
                        <td>Marco Gambacorta</td>
                        <td>6.4 km</td>
                        <td>1 ora 20 min</td>
                        <td>6.4 km</td>
                        <td>33 min</td>
                        <td>6.9 km</td>
                        <td>26 min</td>
                        <td>8.5 km</td>
                        <td>20 min</td>
                    </tr>
                    <tr>
                        <td>Franca Berardi</td>
                        <td>14.1 km</td>
                        <td>2 ore 59 min</td>
                        <td>14.1 km</td>
                        <td>1 ora 14 min</td>
                        <td>19.2 km</td>
                        <td>1 ora 4 min</td>
                        <td>25.0 km</td>
                        <td>31 min</td>
                    </tr>
                    <tr>
                        <td>Luca Brodolini</td>
                        <td>7.4 km</td>
                        <td>1 ora 32 min</td>
                        <td>7.4 km</td>
                        <td>38 min</td>
                        <td>8.7 km</td>
                        <td>42 min</td>
                        <td>9.7 km</td>
                        <td>15 min</td>
                    </tr>
                    <tr>
                        <td>Gino Sambenati</td>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                        <td>8.8 km</td>
                        <td>42 min</td>
                        <td>null</td>
                        <td>null</td>
                    </tr>
                    <tr>
                        <td>Andrea Simonetti</td>
                        <td>4.4 km</td>
                        <td>54 min</td>
                        <td>4.4 km</td>
                        <td>22 min</td>
                        <td>5.5 km</td>
                        <td>32 min</td>
                        <td>5.7 km</td>
                        <td>14 min</td>
                    </tr>
                    <tr>
                        <td>Christian Guevara</td>
                        <td>6.5 km</td>
                        <td>1 ora 20 min</td>
                        <td>6.5 km</td>
                        <td>33 min</td>
                        <td>9.0 km</td>
                        <td>38 min</td>
                        <td>6.6 km</td>
                        <td>14 min</td>
                    </tr>
                    <tr>
                        <td>Pamela Pugliese</td>
                        <td>9.3 km</td>
                        <td>1 ora 55 min</td>
                        <td>9.3 km</td>
                        <td>47 min</td>
                        <td>10.7 km</td>
                        <td>54 min</td>
                        <td>11.1 km</td>
                        <td>18 min</td>
                    </tr>
                    <tr>
                        <td>Francesca Latorre</td>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                        <td>25.3 km</td>
                        <td>1 ora 11 min</td>
                        <td>null</td>
                        <td>null</td>
                    </tr>
                    <tr>
                        <td>Maristella Sanna</td>
                        <td>25.2 km</td>
                        <td>5 ore 14 min</td>
                        <td>25.2 km</td>
                        <td>2 ore 10 min</td>
                        <td>22.4 km</td>
                        <td>1 ora 4 min</td>
                        <td>26.6 km</td>
                        <td>34 min</td>
                    </tr>
                    <tr>
                        <td>Luca Molocchi</td>
                        <td>5.6 km</td>
                        <td>1 ora 10 min</td>
                        <td>5.6 km</td>
                        <td>29 min</td>
                        <td>14.4 km</td>
                        <td>49 min</td>
                        <td>39.0 km</td>
                        <td>41 min</td>
                    </tr>
                    <tr>
                        <td>MARIO ACCURSO</td>
                        <td>22.0 km</td>
                        <td>4 ore 26 min</td>
                        <td>22.0 km</td>
                        <td>1 ora 50 min</td>
                        <td>8.4 km</td>
                        <td>40 min</td>
                        <td>6.8 km</td>
                        <td>17 min</td>
                    </tr>
                    <tr>
                        <td>pablo mendoza</td>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                    </tr>
                    <tr>
                        <td>PATRIZIA DELL'AQUILA</td>
                        <td>47.2 km</td>
                        <td>9 ore 48 min</td>
                        <td>47.2 km</td>
                        <td>4 ore 5 min</td>
                        <td>4.4 km</td>
                        <td>26 min</td>
                        <td>42.2 km</td>
                        <td>44 min</td>
                    </tr>
                    <tr>
                        <td>Luca Puletti</td>
                        <td>54.1 km</td>
                        <td>11 ore 3 min</td>
                        <td>54.1 km</td>
                        <td>4 ore 36 min</td>
                        <td>40.6 km</td>
                        <td>1 ora 1 min</td>
                        <td>51.9 km</td>
                        <td>49 min</td>
                    </tr>
                    <tr>
                        <td>Letizia Mazzeo</td>
                        <td>4.0 km</td>
                        <td>49 min</td>
                        <td>4.0 km</td>
                        <td>20 min</td>
                        <td>11.5 km</td>
                        <td>38 min</td>
                        <td>4.6 km</td>
                        <td>10 min</td>
                    </tr>
                    <tr>
                        <td>ROBERTA FIORAVANTI</td>
                        <td>4.1 km</td>
                        <td>50 min</td>
                        <td>4.1 km</td>
                        <td>20 min</td>
                        <td>4.6 km</td>
                        <td>27 min</td>
                        <td>5.0 km</td>
                        <td>11 min</td>
                    </tr>
                    <tr>
                        <td>Eleonora Ventresca</td>
                        <td>9.2 km</td>
                        <td>1 ora 55 min</td>
                        <td>9.2 km</td>
                        <td>48 min</td>
                        <td>9.0 km</td>
                        <td>33 min</td>
                        <td>14.2 km</td>
                        <td>26 min</td>
                    </tr>
                    <tr>
                        <td>Francesca Perri</td>
                        <td>6.5 km</td>
                        <td>1 ora 21 min</td>
                        <td>6.5 km</td>
                        <td>33 min</td>
                        <td>13.4 km</td>
                        <td>54 min</td>
                        <td>10.8 km</td>
                        <td>19 min</td>
                    </tr>
                    <tr>
                        <td>Edoardo Vitale</td>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                    </tr>
                    <tr>
                        <td>Marsicola Franco Fernando</td>
                        <td>62.6 km</td>
                        <td>12 ore 52 min</td>
                        <td>62.6 km</td>
                        <td>5 ore 21 min</td>
                        <td>97.2 km</td>
                        <td>3 ore 0 min</td>
                        <td>74.4 km</td>
                        <td>1 ora 8 min</td>
                    </tr>
                    <tr>
                        <td>Gaia Gaballo</td>
                        <td>11.6 km</td>
                        <td>2 ore 25 min</td>
                        <td>11.6 km</td>
                        <td>1 ora 0 min</td>
                        <td>0.7 km</td>
                        <td>9 min</td>
                        <td>107 km</td>
                        <td>1 ora 18 min</td>
                    </tr>
                    <tr>
                        <td>Dario Azzarà</td>
                        <td>112 km</td>
                        <td>22 ore 54 min</td>
                        <td>112 km</td>
                        <td>9 ore 32 min</td>
                        <td>12.8 km</td>
                        <td>47 min</td>
                        <td>16.6 km</td>
                        <td>30 min</td>
                    </tr>
                    <tr>
                        <td>Isabella D'Alessio</td>
                        <td>48.0 km</td>
                        <td>9 ore 53 min</td>
                        <td>48.0 km</td>
                        <td>4 ore 7 min</td>
                        <td>null</td>
                        <td>null</td>
                        <td>40.5 km</td>
                        <td>42 min</td>
                    </tr>
                    <tr>
                        <td>Giovanna Mirabella</td>
                        <td>4.4 km</td>
                        <td>54 min</td>
                        <td>4.4 km</td>
                        <td>22 min</td>
                        <td>38.0 km</td>
                        <td>1 ora 26 min</td>
                        <td>6.4 km</td>
                        <td>15 min</td>
                    </tr>
                    <tr>
                        <td>Andrea Cozzatelli</td>
                        <td>35.7 km</td>
                        <td>7 ore 10 min</td>
                        <td>35.7 km</td>
                        <td>2 ore 59 min</td>
                        <td>8.3 km</td>
                        <td>32 min</td>
                        <td>64.0 km</td>
                        <td>1 ora 4 min</td>
                    </tr>
                    <tr>
                        <td>Alessandro Imondi</td>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                        <td>4.1 km</td>
                        <td>24 min</td>
                        <td>null</td>
                        <td>null</td>
                    </tr>
                    <tr>
                        <td>Margherita ghella</td>
                        <td>6.4 km</td>
                        <td>1 ora 21 min</td>
                        <td>6.4 km</td>
                        <td>33 min</td>
                        <td>23.4 km</td>
                        <td>1 ora 18 min</td>
                        <td>24.9 km</td>
                        <td>31 min</td>
                    </tr>
                    <tr>
                        <td>nobile michelina</td>
                        <td>20.3 km</td>
                        <td>4 ore 9 min</td>
                        <td>20.3 km</td>
                        <td>1 ora 43 min</td>
                        <td>20.0 km</td>
                        <td>1 ora 4 min</td>
                        <td>7.2 km</td>
                        <td>22 min</td>
                    </tr>
                    <tr>
                        <td>Giorgio Aglioti</td>
                        <td>3.0 km</td>
                        <td>36 min</td>
                        <td>3.0 km</td>
                        <td>15 min</td>
                        <td>9.2 km</td>
                        <td>50 min</td>
                        <td>3.3 km</td>
                        <td>9 min</td>
                    </tr>
                    <tr>
                        <td>Elpidio Giuseppe Falace</td>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                        <td>9.3 km</td>
                        <td>40 min</td>
                        <td>null</td>
                        <td>null</td>
                    </tr>
                    <tr>
                        <td>Raffaella De Cupis</td>
                        <td>12.7 km</td>
                        <td>2 ore 37 min</td>
                        <td>12.7 km</td>
                        <td>1 ora 5 min</td>
                        <td>14.6 km</td>
                        <td>1 ora 29 min</td>
                        <td>14.5 km</td>
                        <td>34 min</td>
                    </tr>
                    <tr>
                        <td>Patricia del Pilar VALDIVIA OCAMPO</td>
                        <td>7.7 km</td>
                        <td>1 ora 34 min</td>
                        <td>7.7 km</td>
                        <td>39 min</td>
                        <td>13.9 km</td>
                        <td>42 min</td>
                        <td>8.1 km</td>
                        <td>17 min</td>
                    </tr>
                    <tr>
                        <td>Alessandra Remediani</td>
                        <td>12.4 km</td>
                        <td>2 ore 37 min</td>
                        <td>12.4 km</td>
                        <td>1 ora 5 min</td>
                        <td>17.4 km</td>
                        <td>55 min</td>
                        <td>12.4 km</td>
                        <td>28 min</td>
                    </tr>
                    <tr>
                        <td>MARCO TUMMARELLO</td>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                        <td>2.7 km</td>
                        <td>17 min</td>
                        <td>null</td>
                        <td>null</td>
                    </tr>
                    <tr>
                        <td>Vito Catalano</td>
                        <td>2.1 km</td>
                        <td>25 min</td>
                        <td>2.1 km</td>
                        <td>10 min</td>
                        <td>8.6 km</td>
                        <td>38 min</td>
                        <td>7.5 km</td>
                        <td>15 min</td>
                    </tr>
                    <tr>
                        <td>José M. Lorenzo G.</td>
                        <td>10.1 km</td>
                        <td>2 ore 6 min</td>
                        <td>10.1 km</td>
                        <td>52 min</td>
                        <td>0.9 km</td>
                        <td>11 min</td>
                        <td>13.5 km</td>
                        <td>27 min</td>
                    </tr>
                    <tr>
                        <td>Federico Ghella</td>
                        <td>6.9 km</td>
                        <td>1 ora 25 min</td>
                        <td>6.9 km</td>
                        <td>35 min</td>
                        <td>12.1 km</td>
                        <td>48 min</td>
                        <td>2.3 km</td>
                        <td>8 min</td>
                    </tr>
                    <tr>
                        <td>Luana Fiordelli</td>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                    </tr>
                    <tr>
                        <td>joyce bou fadel</td>
                        <td>96.3 km</td>
                        <td>20 ore 4 min</td>
                        <td>96.3 km</td>
                        <td>8 ore 21 min</td>
                        <td>115 km</td>
                        <td>1 ora 55 min</td>
                        <td>108 km</td>
                        <td>1 ora 23 min</td>
                    </tr>
                    <tr>
                        <td>PAOLO BERNARDINI</td>
                        <td>7.4 km</td>
                        <td>1 ora 33 min</td>
                        <td>7.4 km</td>
                        <td>38 min</td>
                        <td>12.3 km</td>
                        <td>37 min</td>
                        <td>8.7 km</td>
                        <td>21 min</td>
                    </tr>
                    <tr>
                        <td>riccardo albanesi</td>
                        <td>26.3 km</td>
                        <td>5 ore 19 min</td>
                        <td>26.3 km</td>
                        <td>2 ore 13 min</td>
                        <td>9.9 km</td>
                        <td>44 min</td>
                        <td>43.2 km</td>
                        <td>47 min</td>
                    </tr>
                    <tr>
                        <td>Lucia Pepe</td>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                    </tr>
                    <tr>
                        <td>Simona Santaroni</td>
                        <td>4.4 km</td>
                        <td>54 min</td>
                        <td>4.4 km</td>
                        <td>22 min</td>
                        <td>5.8 km</td>
                        <td>30 min</td>
                        <td>5.6 km</td>
                        <td>14 min</td>
                    </tr>
                    <tr>
                        <td>Giovanna Bruni</td>
                        <td>7.9 km</td>
                        <td>1 ora 37 min</td>
                        <td>7.9 km</td>
                        <td>40 min</td>
                        <td>9.4 km</td>
                        <td>42 min</td>
                        <td>8.5 km</td>
                        <td>18 min</td>
                    </tr>
                    <tr>
                        <td>Gian Vincenzo Coppi</td>
                        <td>6.4 km</td>
                        <td>1 ora 20 min</td>
                        <td>6.4 km</td>
                        <td>33 min</td>
                        <td>6.6 km</td>
                        <td>27 min</td>
                        <td>8.6 km</td>
                        <td>20 min</td>
                    </tr>
                    <tr>
                        <td>giuseppe candiracci</td>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                    </tr>
                    <tr>
                        <td>Loredana Matteocci</td>
                        <td>72.1 km</td>
                        <td>14 ore 54 min</td>
                        <td>72.1 km</td>
                        <td>6 ore 12 min</td>
                        <td>null</td>
                        <td>null</td>
                        <td>65.5 km</td>
                        <td>56 min</td>
                    </tr>
                    <tr>
                        <td>RUOCCO AUGUSTO</td>
                        <td>14.6 km</td>
                        <td>3 ore 0 min</td>
                        <td>14.6 km</td>
                        <td>1 ora 15 min</td>
                        <td>26.3 km</td>
                        <td>1 ora 22 min</td>
                        <td>15.9 km</td>
                        <td>25 min</td>
                    </tr>
                    <tr>
                        <td>Giovanni Giacomin</td>
                        <td>0.9 km</td>
                        <td>11 min</td>
                        <td>0.9 km</td>
                        <td>4 min</td>
                        <td>0.9 km</td>
                        <td>11 min</td>
                        <td>1.6 km</td>
                        <td>7 min</td>
                    </tr>
                    <tr>
                        <td>Federico Giustini</td>
                        <td>6.9 km</td>
                        <td>1 ora 26 min</td>
                        <td>6.9 km</td>
                        <td>35 min</td>
                        <td>14.3 km</td>
                        <td>52 min</td>
                        <td>3.3 km</td>
                        <td>9 min</td>
                    </tr>
                    <tr>
                        <td>Lorenzo Ghella</td>
                        <td>31.2 km</td>
                        <td>6 ore 28 min</td>
                        <td>31.2 km</td>
                        <td>2 ore 41 min</td>
                        <td>10.7 km</td>
                        <td>42 min</td>
                        <td>8.5 km</td>
                        <td>20 min</td>
                    </tr>
                </tbody>
            </Table>
        )
    }
}

export default TableData
