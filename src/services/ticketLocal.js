export const ticketLocal = {
  set: (ticketInfor) => {
    if (ticketInfor !== null && ticketInfor !== undefined) {
      let json = JSON.stringify(ticketInfor);
      localStorage.setItem("TICKET_INFOR", json);
    }
  },
  get: () => {
    let json = localStorage.getItem("TICKET_INFOR");
    if (json) {
      return JSON.parse(json);
    } else {
      return null;
    }
  },
  del: () => {
    localStorage.removeItem("TICKET_INFOR");
  },
};
