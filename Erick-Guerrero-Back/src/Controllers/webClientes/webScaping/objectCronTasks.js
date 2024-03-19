const { lotedom1355,updateTicketStatus, updateTicketStatusAdmin, laSuerteDominicanaMD,laSuerteDominicana6,anguilla, laPrimeraNoche, laPrimeraDia, real1300, floridaNoche, floridaTarde, newYorkNoche, newYorkTarde, ganaMas, loteka1955, leidsaLS2055, leidsaDom1555, nacionalLS21, nacionalDom6 } = require('./lotteryFunction');

const cronTasks = [
  { pattern: '5 10 * * *',nombre:"anguilla", func: anguilla },

  { pattern: '40 10 * * *',nombre:"control", func: anguilla },

  { pattern: '5 11 * * *',nombre:"anguilla", func: anguilla },

  { pattern: '40 11 * * *',nombre:"control", func: anguilla },

  { pattern: '5 12 * * *',nombre:"anguilla", func: anguilla },

  { pattern: '40 12 * * *',nombre:"control", func: anguilla },

  { pattern: '5 13 * * *',nombre:"laPrimeraDia", func: laPrimeraDia },

  { pattern: '40 13 * * *',nombre:"control", func: laPrimeraDia },

  { pattern: '40 13 * * *',nombre:"laSuerteDominicanaMD", func: laSuerteDominicanaMD },

  { pattern: '30 14 * * *',nombre:"control", func: laSuerteDominicanaMD },

  { pattern: '5 14 * * *',nombre:"real1300", func: real1300 },

  { pattern: '40 14 * * *',nombre:"control", func: real1300 },

  { pattern: '1 15 * * *',nombre:"lotedom1355", func: lotedom1355 },

  { pattern: '40 15 * * *',nombre:"control", func: lotedom1355 },

  { pattern: '40 15 * * *',nombre:"floridaTarde", func: floridaTarde },

  { pattern: '30 16 * * *',nombre:"control", func: floridaTarde },

  { pattern: '41 15 * * *',nombre:"ganaMas", func: ganaMas },

  { pattern: '30 16 * * *',nombre:"control", func: ganaMas },

  { pattern: '5 16 * * *',nombre:"anguilla", func: anguilla },

  { pattern: '30 16 * * *',nombre:"control", func: anguilla },

  { pattern: '35 16 * * *',nombre:"newYorkTarde", func: newYorkTarde },

  { pattern: '30 17 * * *',nombre:"control", func: newYorkTarde },

  { pattern: '1 17 * * *',nombre:"leidsaDom1555", func: leidsaDom1555 },

  { pattern: '40 17 * * *',nombre:"control", func: leidsaDom1555 },

  { pattern: '5 17 * * *',nombre:"anguilla", func: anguilla },

  { pattern: '40 17 * * *',nombre:"control", func: anguilla },

  { pattern: '5 18 * * *',nombre:"anguilla", func: anguilla },

  { pattern: '40 18 * * *',nombre:"control", func: anguilla },

  { pattern: '5 19 * * *',nombre:"nacionalDom6", func: nacionalDom6 },

  { pattern: '30 19 * * *',nombre:"control", func: nacionalDom6 },

  { pattern: '16 19 * * *',nombre:"anguilla", func: anguilla },

  { pattern: '40 19 * * *',nombre:"control", func: anguilla },

  { pattern: '7 19 * * *',nombre:"laSuerteDominicana6", func: laSuerteDominicana6 },

  { pattern: '40 19 * * *',nombre:"control", func: laSuerteDominicana6 },

  { pattern: '5 20 * * *',nombre:"anguilla", func: anguilla },

  { pattern: '40 20 * * *',nombre:"control", func: anguilla },

  { pattern: '1 20 * * *',nombre:"loteka1955", func: loteka1955 },

  { pattern: '40 20 * * *',nombre:"control", func: loteka1955 },

  { pattern: '5 21 * * *',nombre:"laPrimeraNoche", func: laPrimeraNoche },

  { pattern: '40 21 * * *',nombre:"control", func: laPrimeraNoche },

  { pattern: '1 22 * * *',nombre:"leidsaLS2055", func: leidsaLS2055 },

  { pattern: '40 22 * * *',nombre:"control", func: leidsaLS2055 },

  { pattern: '6 22 * * *',nombre:"nacionalLS21", func: nacionalLS21 },

  { pattern: '40 22 * * *',nombre:"control", func: nacionalLS21 },

  { pattern: '5 23 * * *',nombre:"anguilla", func: anguilla },

  { pattern: '40 23 * * *',nombre:"control", func: anguilla },

  { pattern: '0 1 * * *',nombre:"newYorkNoche", func: newYorkNoche },

  { pattern: '30 1 * * *',nombre:"control", func: newYorkNoche },

  { pattern: '45 23 * * *',nombre:"floridaNoche", func: floridaNoche },

  { pattern: '30 0 * * *',nombre:"control", func: floridaNoche },

  { pattern: '0 4 * * *',nombre:"ticketUpdateStateAdmin", func: updateTicketStatusAdmin },

  { pattern: '0 5 * * *',nombre:"ticketUpdate", func: updateTicketStatus },
  ];
  
  module.exports = {cronTasks}