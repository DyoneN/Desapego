import React, { useState } from "react";
import IMG from "../../assets/images/bag.png"
import {
  Container,
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";

import "./styles.css";

function Form() {
  const [product, setProduct] = useState('');
  
  const [tipe_teaching, setTipeTeaching] = useState('');
  const [school, setSchool] = useState('');
  const [state, setState] = useState('');
  const [ciry, setCiry] = useState('');
  const [district, setdistrict] = useState('');
  const [categories, setCategories] = useState('');
  const [sub_categories, setSub_categories] = useState('');
  const [price, setPrice] = useState('');
  const [priceDescount, setPriceDescount] = useState('');
  const [description, setDescription] = useState('');
  
  const [nivelEm1, setNivelEn1] = useState('');
  const [nivelEm2, setNivelEn2] = useState('');
  const [nivelEm3, setNivelEn3] = useState('');
  const [nivelEm4, setNivelEn4] = useState('');
  const [anoSerie1, setAnoSerie1] = useState('');
  const [anoSerie2, setAnoSerie2] = useState('');
  const [anoSerie3, setAnoSerie3] = useState('');
  const [anoSerie4, setAnoSerie4] = useState('');
  const [anoSerie5, setAnoSerie5] = useState('');
  const [anoSerie6, setAnoSerie6] = useState('');
  const [anoSerie7, setAnoSerie7] = useState('');
  const [anoSerie8, setAnoSerie8] = useState('');
  const [anoSerie9, setAnoSerie9] = useState('');
  const [anoSerie10, setAnoSerie10] = useState('');
  const [anoSerie11, setAnoSerie11] = useState('');
  const [anoSerie12, setAnoSerie12] = useState('');
  const [anoSerie13, setAnoSerie13] = useState('');
  const [file, setFile] = useState();

  const [CEPError, setCEPError] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }

  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
}
//className="imagemProduct"
  return (
    <Container maxWidth="sm" component="article"  >
      <div className="form">
      <h1 className="titleAddProducts">Adicionar Novo Poduto</h1>
      <form onSubmit={(event) => {
        event.preventDefault();
      }}>
        <div className="header">
          <div className="positionImage">
          <input type="file" onChange={handleChange} />
          <img src={file} className="imagemProduct"  />
          </div>
          <div className="theNameProduct">
            <div>
            <TextField
              id="nameProduct"
              label="Nome do Produto"
              variant="standard"
              margin="dense"
              className="TextFildAll"
              fullWidth
              value={product}
              onChange={(event) => {setProduct(event.target.value)}}
            />  
            </div>
            <div>
            <TextField
              id="last_name"
              label="Tipo de ensino"
              variant="standard"
              margin="dense"
              className="TextFildAll"
              fullWidth
              value={tipe_teaching}
              onChange={(event) => {setTipeTeaching(event.target.value)}}
            />
            </div>
            

            
            <div className="checkboxes">
            <h1>Nivel de ensino</h1>
            <div>
              <FormControlLabel
                control={
                  <Checkbox
                    value="promotions"
                    color="primary"
                    name="Infantil"
                    checked={nivelEm1}
                    onChange={(event) => {
                      setNivelEn1(event.target.checked);
                    }}
                  />
                }
                label="Infantil"
              />
              
          <FormControlLabel
            control={<Checkbox
              value="anoSerie"
              color="primary"
              name="Fundamental_1"
              checked={nivelEm2}
              onChange={(event) => {
                setNivelEn2(event.target.checked);
              }} 
            />}
            label="Fundamental 1"
          />
          <FormControlLabel
            
            control={
              <Checkbox
                value="promotions"
                color="primary"
                name="Fundamental_2"
                checked={nivelEm3}
                onChange={(event) => {
                  setNivelEn3(event.target.checked);
                }}
              />
            }
            label="Fundamental 2"
          />

          <FormControlLabel
            control={<Checkbox
              value="news"
              color="primary"
              name="Médio"
              checked={nivelEm4}
              onChange={(event) => {
                setNivelEn4(event.target.checked);
              }} 
            />}
            label="Médio"
          />
          </div>
          </div>
          </div>
        </div>
        <div className="bodyQuest">
          <div className="checkboxes">
            <h1>Ano / Série</h1>
            <div>
          <FormControlLabel
            control={
              <Checkbox
                value="promotions"
                color="primary"
                name="Infantil"
                checked={anoSerie1}
                onChange={(event) => {
                  setAnoSerie1(event.target.checked);
                }}
              />
            }
            label="Infantil"
          />

          <FormControlLabel
            control={<Checkbox
              value="news"
              color="primary"
              name="ano1"
              checked={anoSerie2}
              onChange={(event) => {
                setAnoSerie2(event.target.checked);
              }} 
            />}
            label="1 ano"
          />
          <FormControlLabel
            
            control={
              <Checkbox
                value="promotions"
                color="primary"
                name="ano2"
                checked={anoSerie3}
                onChange={(event) => {
                  setAnoSerie3(event.target.checked);
                }}
              />
            }
            label="2 ano"
          />

          <FormControlLabel
            control={<Checkbox
              value="news"
              color="primary"
              name="ano3"
              checked={anoSerie4}
              onChange={(event) => {
                setAnoSerie4(event.target.checked);
              }} 
            />}
            label="3 ano"
          />
          <FormControlLabel
            
            control={
              <Checkbox
                value="promotions"
                color="primary"
                name="ano4"
                checked={anoSerie5}
                onChange={(event) => {
                  setAnoSerie5(event.target.checked);
                }}
              />
            }
            label="4 ano"
          />

          <FormControlLabel
            control={<Checkbox
              //value="news"
              color="primary"
              name="ano5"
              checked={anoSerie6}
              onChange={(event) => {
                setAnoSerie6(event.target.checked);
              }} 
            />}
            label="5 ano"
          />
          <FormControlLabel
            
            control={
              <Checkbox
                value="promotions"
                color="primary"
                name="ano6"
                checked={anoSerie7}
                onChange={(event) => {
                  setAnoSerie7(event.target.checked);
                }}
              />
            }
            label="6 ano"
          />

          <FormControlLabel
            control={<Checkbox
              value="news"
              color="primary"
              name="ano7"
              checked={anoSerie8}
              onChange={(event) => {
                setAnoSerie8(event.target.checked);
              }} 
            />}
            label="7 ano"
          />
          <FormControlLabel
            
            control={
              <Checkbox
                value="promotions"
                color="primary"
                name="ano8"
                checked={anoSerie9}
                onChange={(event) => {
                  setAnoSerie9(event.target.checked);
                }}
              />
            }
            label="8 ano"
          />

          <FormControlLabel
            control={<Checkbox
              value="news"
              color="primary"
              name="ano9"
              checked={anoSerie10}
              onChange={(event) => {
                setAnoSerie10(event.target.checked);
              }} 
            />}
            label="9 ano"
          />
          <FormControlLabel
            
            control={
              <Checkbox
                value="promotions"
                color="primary"
                name="anoMedio1"
                checked={anoSerie11}
                onChange={(event) => {
                  setAnoSerie11(event.target.checked);
                }}
              />
            }
            label="1 ano Médio"
          />

          <FormControlLabel
            control={<Checkbox
              value="news"
              color="primary"
              name="anomedio2"
              checked={anoSerie12}
              onChange={(event) => {
                setAnoSerie12(event.target.checked);
              }} 
            />}
            label="2 ano Médio"
          />
          <FormControlLabel
            control={<Checkbox
              value="news"
              color="primary"
              name="anomedio3"
              checked={anoSerie13}
              onChange={(event) => {
                setAnoSerie13(event.target.checked);
              }} 
            />}
            label="3 ano Médio"
          />
            </div>
          
          </div>
             
          <div className="schoolLocale">
            <div>
              <TextField
               id="last_name"
                label="Escola"
                variant="standard"
                margin="o"
                className="TextFildAll"
                fullWidth
                value={school}
                onChange={(event) => {setSchool(event.target.value)}}
              />
            </div>
            <div>
              <TextField
                id="last_name"
                label="Estado"
                variant="standard"
                margin="dense"
                className="TextFildAll"
                fullWidth
                value={state}
                onChange={(event) => {setState(event.target.value)}}
              />
            </div>
            <div>
              <TextField
                id="last_name"
                label="Cidade"
                variant="standard"
                margin="dense"
                className="TextFildAll"
                fullWidth
                value={ciry}
                onChange={(event) => {setCiry(event.target.value)}}
              />
            </div>
            <div>
              <TextField
                id="last_name"
                label="Bairro"
                variant="standard"
                margin="dense"
                className="TextFildAll"
                fullWidth
                value={district}
                onChange={(event) => {setdistrict(event.target.value)}}
              />
            </div>
          </div>
        

          <div className="categories">
            <div>
              <TextField
                id="last_name"
                label="Categoria"
                variant="standard"
                margin="dense"
                className="TextFildAll"
                fullWidth
                value={categories}
                onChange={(event) => {setCategories(event.target.value)}}
              />
            </div>
            <div className="subCat">
             <TextField
                id="last_name"
                label="Sub-Categoria"
                variant="standard"
                margin="dense"
                className="TextFildAll"
                fullWidth
                value={sub_categories}
                onChange={(event) => {setSub_categories(event.target.value)}}
              />
            </div>
          </div>
          <div className="price">
            <div>
              <TextField
                className="textFieldPrice"
                id="last_name"
                label="Preço"
                variant="standard"
                margin="dense"
                fullWidth
                value={price}
                onChange={(event) => {setPrice(event.target.value)}}
              />
            </div>
            <div className="subPri">
              <TextField
                className="textFieldPrice"
                id="last_name"
                label="Preço com desconto"
                variant="standard"
                margin="dense"
                fullWidth
                value={priceDescount}
                onChange={(event) => {setPriceDescount(event.target.value)}}
              />
            </div>
          </div>
        
          <div>
          <TextField
            id="last_name"
            label="Descrição do produto"
            variant="outlined"
            margin="dence"
            className=""
            fullWidth
            value={description}
            onChange={(event) => {setDescription(event.target.value)}}
          />
          </div>
        
          <div className="btn">
        <Button className="btn-form" variant="outlined"  href="/PageVendor">
          Cancelar Cadastro
        </Button>
        <Button className="btn-form" variant="outlined" >
          Cadastrar Produto
        </Button>
        
          </div>
        </div>
      </form>
      </div>

      
    </Container>
  );
}

export default Form;

//<p>{name} {last_name}</p>