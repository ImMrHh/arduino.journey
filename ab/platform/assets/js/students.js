/* ================================================================
   STUDENTS.JS - Student Roster
   Group A: 18 students | Group B: 19 students
   ================================================================ */

const STUDENTS = {
  A: [
    { id: "001", name: "Fatima" },
    { id: "002", name: "Iker" },
    { id: "003", name: "Jules" },
    { id: "004", name: "JoseL" },
    { id: "005", name: "DiegoG" },
    { id: "006", name: "Cons" },
    { id: "007", name: "Gabo" },
    { id: "008", name: "Pau" },
    { id: "009", name: "SantiL" },
    { id: "010", name: "Alonso" },
    { id: "011", name: "Diego2nd" },
    { id: "012", name: "Emi" },
    { id: "013", name: "Oli" },
    { id: "014", name: "Arthur" },
    { id: "015", name: "Emma" },
    { id: "016", name: "JP" },
    { id: "017", name: "SantiS" },
    { id: "018", name: "Majo" }
  ],
  B: [
    { id: "019", name: "Rodri" },
    { id: "020", name: "JuanA" },
    { id: "021", name: "Alex" },
    { id: "022", name: "Emi" },
    { id: "023", name: "Jero" },
    { id: "024", name: "Thomas" },
    { id: "025", name: "Thiago" },
    { id: "026", name: "Nats" },
    { id: "027", name: "Pato" },
    { id: "028", name: "Bruno" },
    { id: "029", name: "Max" },
    { id: "030", name: "Anto" },
    { id: "031", name: "Aitana" },
    { id: "032", name: "Juan2nd" },
    { id: "033", name: "Sil" },
    { id: "034", name: "Anya" },
    { id: "035", name: "Luka" },
    { id: "036", name: "Ian" },
    { id: "037", name: "Xime" }
  ]
};

/**
 * Get student by name and group
 */
function getStudent(name, group) {
  if (!STUDENTS[group]) return null;
  return STUDENTS[group].find(s => s.name === name) || null;
}

/**
 * Verify if name exists in group
 */
function isValidStudent(name, group) {
  return getStudent(name, group) !== null;
}

/**
 * Get all students in a group
 */
function getGroupStudents(group) {
  return STUDENTS[group] || [];
}

/**
 * Get total student count
 */
function getTotalStudents() {
  return STUDENTS.A.length + STUDENTS.B.length;
}
