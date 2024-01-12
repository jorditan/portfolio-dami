import { createSlice } from '@reduxjs/toolkit';

const reproduccionSlice = createSlice({
     name: 'reproduccion',
     initialState: {
          estaSonando: false,
          cancionActual: {
               titulo: null,
               id: null,
               cancion: null,
          },
          estaActiva: false,
          indexActual: 0
     },
     reducers: {
          iniciarReproduccion: (state, action) => {
               state.estaSonando = true;
               state.estaActiva = true;
               state.cancionActual = {
                    titulo: action.payload.titulo,
                    id: action.payload.id,
                    cancion: action.payload.cancion,
               }
          },
          detenerReproduccion: (state) => {
               state.estaSonando = false;
               state.cancionActual = {
                    titulo: null,
                    id: null,
                    cancion: null
               };
          },
          playPausa: (state, action) => {
               state.estaSonando = action.payload;
          },
     },
});

export const { iniciarReproduccion, detenerReproduccion, playPausa } = reproduccionSlice.actions;
export default reproduccionSlice.reducer;