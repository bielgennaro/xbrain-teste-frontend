import React from 'react';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { updateName, updateEmail, updateGender } from '../redux/formSlice'
import FormControl from '@mui/material/FormControl';
import { Button, MenuItem } from '@mui/material';

function Form() {
  // dispara ação de submissão do formulário
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleNameChange = (event) => {
    dispatch(updateName(event.target.value));
  };

  const handleEmailChange = (event) => {
    dispatch(updateEmail(event.target.value));
  };

  const handleGenderChange = (event) => {
    dispatch(updateGender(event.target.value));
  };

  return (
    <>
      <div className="ml-[18rem] top-[2rem] bottom-[-10rem] relative mb-0">
        <h1 className="text-xl m-2 text-teal-700 font-medium">Dados do Cliente</h1>
        <hr className="w-[60rem] h-[0.1rem] bg-slate-200" />
      </div>

      <form className="flex grid-cols-4 w-[60rem] ml-[18rem] gap-4 top-[3rem] bottom-[16rem] relative">
        <label className='flex justify-around'>
          <TextField
            label="Nome"
            type="text"
            placeholder="Nome do cliente"
            onChange={handleNameChange}
            id="outlined"
            fullWidth
            size="small"
            required="true"
            style={{ width: '390px' }}
          >Nome</TextField>

        </label>
        <FormControl className='flex justify-around'>
          <TextField
            label="E-mail"
            type="text"
            placeholder="E-mail do cliente"
            onChange={handleEmailChange}
            id="outlined"
            fullWidth
            size="small"
            required="true"
            style={{ width: '390px' }}

          >E-mail</TextField>
        </FormControl>
        <FormControl variant="outlined" size="small" className='flex justify-around'>
          <InputLabel id="gender-label">Sexo</InputLabel>
          <Select
            labelId="gender-label"
            placeholder='Selecione'
            onChange={handleGenderChange}
            id="gender-select"
            fullWidth
            label="Sexo"
            style={{ width: '150px' }}
          >
            <MenuItem value="male">Masculino</MenuItem>
            <MenuItem value="female">Feminino</MenuItem>
            <MenuItem value="other">Outro</MenuItem>
          </Select>
        </FormControl>
      </form>
      <Link to="finalizacao">
        <Button variant="contained"
          onChange={handleSubmit}
          type="submit"
          style={{ marginBottom: "10rem", right: "22rem", left: "68rem", bottom: "2rem", top: "7rem", padding: "auto", backgroundColor: "#ff9800" }}
        > Finalizar compra</Button>
      </Link>




    </>
  )

}

export default Form;
