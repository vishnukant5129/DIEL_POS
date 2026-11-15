export const LESSONS = [
  { title:'1. What is a dielectric?', body:'A dielectric is an electrical insulating material that can be polarized when placed in an electric field. It does not allow free current to flow easily, but it supports an electric field and stores electrical energy.' },
  { title:'2. Polarization', body:'Polarization is the displacement or alignment of bound positive and negative charges inside a dielectric when an electric field is applied. It produces electric dipoles or changes their alignment.' },
  { title:'3. Electronic polarization', body:'The electron cloud shifts slightly relative to the nucleus under an applied electric field. This effect occurs in atoms and is generally very fast.' },
  { title:'4. Ionic polarization', body:'In ionic materials, positive and negative ions shift in opposite directions under an electric field. This produces a net dipole moment.' },
  { title:'5. Orientational polarization', body:'Permanent molecular dipoles tend to align with an applied electric field. Thermal motion opposes perfect alignment, so temperature affects this contribution.' },
  { title:'6. Space-charge polarization', body:'Mobile charges may accumulate at interfaces, grain boundaries or defects. This mechanism is usually more important at lower frequencies.' },
  { title:'7. Relative permittivity', body:'Relative permittivity compares the permittivity of a material with the permittivity of free space. Formula: εr = ε / ε0. It is dimensionless.' },
  { title:'8. Dielectric loss', body:'Dielectric loss describes electrical energy converted into heat inside a dielectric under an alternating electric field. It is commonly represented by tan δ, the loss tangent.' },
  { title:'9. Frequency dependence', body:'Dielectric properties can change with frequency because different polarization mechanisms respond at different speeds. Always report the frequency and measurement conditions with material data.' },
  { title:'10. Applications', body:'Dielectrics are used in capacitors, cable insulation, transformer insulation, electronic circuit substrates, sensors, actuators and high-voltage equipment.' }
];

export const FORMULAS = [
  { label:'Relative permittivity', formula:'εr = ε / ε0', note:'Ratio of material permittivity to free-space permittivity.' },
  { label:'Capacitance of a parallel-plate capacitor', formula:'C = ε0 εr A / d', note:'A is plate area and d is plate separation, for an ideal parallel-plate arrangement.' },
  { label:'Dielectric loss tangent', formula:'tan δ = ε″ / ε′', note:'Ratio of the imaginary part to the real part of complex permittivity under the stated convention.' }
];
