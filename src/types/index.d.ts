export interface ISearchMedicationsResponse {
  meta: IMeta;
  results: IResult[];
}

interface IMeta {
  disclaimer: string;
  terms: string;
  license: string;
  last_updated: string;
  results: IResults;
}

interface IResults {
  skip: number;
  limit: number;
  total: number;
}

interface IResult {
  spl_product_data_elements: string[];
  recent_major_changes?: string[];
  recent_major_changes_table?: string[];
  indications_and_usage: string[];
  dosage_and_administration: string[];
  dosage_and_administration_table?: string[];
  dosage_forms_and_strengths?: string[];
  contraindications?: string[];
  warnings_and_cautions?: string[];
  adverse_reactions?: string[];
  adverse_reactions_table?: string[];
  drug_interactions?: string[];
  use_in_specific_populations?: string[];
  pregnancy?: string[];
  pediatric_use?: string[];
  geriatric_use?: string[];
  overdosage?: string[];
  description?: string[];
  clinical_pharmacology?: string[];
  mechanism_of_action?: string[];
  pharmacodynamics?: string[];
  pharmacokinetics?: string[];
  nonclinical_toxicology?: string[];
  carcinogenesis_and_mutagenesis_and_impairment_of_fertility?: string[];
  clinical_studies?: string[];
  clinical_studies_table?: string[];
  how_supplied?: string[];
  information_for_patients?: string[];
  spl_patient_package_insert?: string[];
  spl_patient_package_insert_table?: string[];
  instructions_for_use?: string[];
  instructions_for_use_table?: string[];
  package_label_principal_display_panel: string[];
  set_id: string;
  id: string;
  effective_time: string;
  version: string;
  openfda: IOpenfda;
  precautions?: string[];
  clinical_pharmacology_table?: string[];
  drug_abuse_and_dependence?: string[];
  warnings?: string[];
  nursing_mothers?: string[];
  drug_and_or_laboratory_test_interactions?: string[];
  how_supplied_table?: string[];
  laboratory_tests?: string[];
  warnings_table?: string[];
  boxed_warning?: string[];
  storage_and_handling?: string[];
  spl_unclassified_section?: string[];
  labor_and_delivery?: string[];
  drug_abuse_and_dependence_table?: string[];
  pharmacokinetics_table?: string[];
  controlled_substance?: string[];
  spl_medguide?: string[];
  spl_medguide_table?: string[];
  references?: string[];
  dosage_forms_and_strengths_table?: string[];
  description_table?: string[];
  drug_interactions_table?: string[];
  general_precautions?: string[];
  teratogenic_effects?: string[];
  nonteratogenic_effects?: string[];
  precautions_table?: string[];
  active_ingredient?: string[];
  purpose?: string[];
  keep_out_of_reach_of_children?: string[];
  other_safety_information?: string[];
  inactive_ingredient?: string[];
  do_not_use?: string[];
  when_using?: string[];
  stop_use?: string[];
}

interface IOpenfda {
  application_number?: string[];
  brand_name?: string[];
  generic_name?: string[];
  manufacturer_name?: string[];
  product_ndc?: string[];
  product_type?: string[];
  route?: string[];
  substance_name?: string[];
  rxcui?: string[];
  spl_id?: string[];
  spl_set_id?: string[];
  package_ndc?: string[];
  is_original_packager?: boolean[];
  unii?: string[];
  upc?: string[];
  nui?: string[];
  pharm_class_epc?: string[];
  pharm_class_cs?: string[];
  original_packager_product_ndc?: string[];
  pharm_class_moa?: string[];
}
