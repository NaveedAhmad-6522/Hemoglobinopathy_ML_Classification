export const diagnoses = [
  "Normal",
  "Beta Thalassemia Minor",
  "Beta Thalassemia Major",
  "Borderline HbA2",
  "Hb D Trait",
  "Sickle Disorders",
] as const;

export type Diagnosis = (typeof diagnoses)[number];

export const classColors: Record<Diagnosis, string> = {
  Normal: "bg-emerald-500",
  "Beta Thalassemia Minor": "bg-brand-600",
  "Beta Thalassemia Major": "bg-violet-500",
  "Borderline HbA2": "bg-amber-500",
  "Hb D Trait": "bg-cyan-500",
  "Sickle Disorders": "bg-rose-500",
};

export function getMockPrediction(values: { age?: string; gender?: string; hba2?: string }) {
  const hba2 = Number(values.hba2 || 4.9);
  const diagnosis: Diagnosis = hba2 >= 3.5 ? "Beta Thalassemia Minor" : "Normal";
  const probabilities: Record<Diagnosis, number> = diagnosis === "Beta Thalassemia Minor"
    ? { "Beta Thalassemia Minor": 98.7, Normal: 0.5, "Borderline HbA2": 0.4, "Hb D Trait": 0.2, "Sickle Disorders": 0.1, "Beta Thalassemia Major": 0.1 }
    : { Normal: 96.8, "Borderline HbA2": 1.1, "Beta Thalassemia Minor": 0.9, "Hb D Trait": 0.6, "Sickle Disorders": 0.4, "Beta Thalassemia Major": 0.2 };
  return { diagnosis, confidence: probabilities[diagnosis], probabilities };
}

export const patientFromQuery = (params: URLSearchParams) => ({
  id: "PT-2025-0842",
  age: params.get("age") || "24",
  gender: params.get("gender") || "Female",
  hba: params.get("hba") || "89.4",
  hba2: params.get("hba2") || "4.9",
  hbf: params.get("hbf") || "0.8",
  rbc: params.get("rbc") || "5.21",
  hgb: params.get("hgb") || "10.8",
  mcv: params.get("mcv") || "68.2",
});
