// FAQ data for PREP Portal — sourced from official NCB URN FAQ document
var FAQ_CATEGORIES = [
  { id: 'urn', label: 'URN Application' },
  { id: 'premises', label: 'Addition of Premises' },
  { id: 'endproduct', label: 'End Products & Consumption Capacity' },
  { id: 'surrender', label: 'Surrendering the URN' }
];

var FAQ_DATA = [
  // ── URN Application (35) ──
  { id: 'urn-1', category: 'urn',
    q: 'In which form should I have to apply for the URN?',
    a: 'All application for the URN shall be made in Form B through the web portal, <a href="http://precursorsncb.gov.in/" target="_blank" rel="noopener noreferrer">precursorsncb.gov.in</a>.' },

  { id: 'urn-2', category: 'urn',
    q: 'What will be the name of the applicant in the Form B?',
    a: 'Name of the applicant will be the name of the firm / company / trust / society etc. <b>It is not the name of the individual who is applying and signing the Form B.</b>' },

  { id: 'urn-3', category: 'urn',
    q: 'What will be the address of the premises in Form B?',
    a: 'The address will be the address where the activity Manufacture / Consumption / Possession / Storage etc. will actually be undertaken. <b>It is not the address of the Corporate office or the residential address of the individual who is applying and signing the Form B.</b>' },

  { id: 'urn-4', category: 'urn',
    q: 'What details are to be filled in the address of the premises?',
    a: 'Applicant has to mandatorily fill the complete details viz. Plot number / Premises Number / Street / Locality / City / State or UT / PIN / Telephone Number / Mobile Number / Fax / e-mail id etc.' },

  { id: 'urn-5', category: 'urn',
    q: 'Can we register more than one address in a single application?',
    a: 'More than one address can be registered in one application if both are falling under the jurisdiction of the same Zonal unit of the Narcotics Control Bureau. A separate URN will be issued for each such premise. <b>For utilizing this option, the name of the company should be exactly same in both of the addresses.</b>' },

  { id: 'urn-6', category: 'urn',
    q: 'Can we register more than one premise with more than one control substance in one application?',
    a: 'If registration is required in case of more than one premise, more than one Controlled Substance and more than one activity, applicant has to indicate the specific activities to be undertaken substance-wise from particular premises. Accordingly, URN will be issued for each premise separately.' },

  { id: 'urn-7', category: 'urn',
    q: 'What will be the name and address of the jurisdictional exercise range?',
    a: 'Jurisdictional GST range of the applicant and its details may be filled.' },

  { id: 'urn-8', category: 'urn',
    q: 'What are the controlled substances for which NCB issues the Unique Registration Number (URN)?',
    a: 'NCB issues the URN for the Schedule A Controlled Substances mentioned in the RCS order, 2013 (as amended). The list of substances is as under:' +
      '<ol><li>Acetic Anhydride</li><li>N-Acetyl anthranilic Acid</li><li>Anthranilic Acid</li><li>Ephedrine &amp; its Salts</li><li>Pseudoephedrine &amp; its Salts</li><li>4-Anilino-N-Phenethylpiperidine (ANPP)</li><li>N-Phenethyl-4-Piperidone (NPP)</li><li>2-Bromo-4-Methylpropiophenone</li></ol>' },

  { id: 'urn-9', category: 'urn',
    q: 'For which activities does NCB issue URN as per the provisions of the RCS order, 2013 (as amended)?',
    a: 'Applicant company can apply for the registration for manufacture / distribution / sale / purchase / possession / storage / consumption / others / offer for sale or distribution or mediate in sale / purchase through website, social media or in any other manner of controlled substance in Schedule A of RCS order 2013 (as amended).' },

  { id: 'urn-10', category: 'urn',
    q: 'If I would like to use a Schedule A controlled substance for manufacturing any other end product, which nature of activity should be chosen in the Form B?',
    a: 'In that case, "Consumption" should be chosen. <b>When "Consumption" is chosen as a nature of activity, "Purchase, Possession, and Storage" also are to be selected, mandatorily.</b>' },

  { id: 'urn-11', category: 'urn',
    q: 'If I would like to sale / distribute a Schedule A controlled substance, which nature of activity should be chosen in the Form B?',
    a: 'In that case, "Distribution and Sale" should be chosen along with the "Purchase, Possession and Storage".' },

  { id: 'urn-12', category: 'urn',
    q: 'If I would like to manufacture a Schedule A controlled substance, which nature of activity should be chosen in the Form B?',
    a: 'In that case, "Manufacture" should be chosen along with "Possession and Storage". <b>If the manufacturing of Control Substance is for own consumption, "Consumption" also be selected. If the manufacturing of Control Substance is for sale, "Distribution and Sale" also be selected.</b>' },

  { id: 'urn-13', category: 'urn',
    q: 'We have license for Purchase, Storage, Possession and Consumption. Now can we sell off the controlled substance that is in our store, as we no longer need it for our production process?',
    a: 'For selling off the controlled substance, registrant company needs to apply for amending the URN and add the nature of activity "Sale". After addition of the \'Sale\' activity only, registrant company may sell off the controlled substance.' },

  { id: 'urn-14', category: 'urn',
    q: 'What will be my jurisdictional Zonal Office?',
    a: 'The area of jurisdiction of a Zonal Director of Narcotics Control Bureau shall be the area as specified in the RCS order, 2013 (as amended). The company falling under the jurisdictional office of NCB shall apply to that Zonal office.' },

  { id: 'urn-15', category: 'urn',
    q: 'I have a URN issued for my company which is situated in Maharashtra by the Zonal Director, NCB, Mumbai. Should I take a fresh URN for my another unit of the same company situated in Gujarat?',
    a: 'Yes. If the factory / company / trust / society is situated under the jurisdiction of NCB Indore, a separate application for the URN has to be submitted. <b>The same applies to the condition where the corporate office of the company is in another state and the factory is situated in the state of MP &amp; CG.</b>' },

  { id: 'urn-16', category: 'urn',
    q: 'My company had a URN which was surrendered by us subsequently due to some reasons. Now again we would like to apply for the URN. Should we mention about the surrendered URN in our new application?',
    a: 'Yes. You need to mention about the same in Part I (E) of the Form B application. Further, a detailed report regarding the surrendered URN may be submitted when and where directed by the competent Authority.' },

  { id: 'urn-17', category: 'urn',
    q: 'I have an issued URN by another Zone of NCB. Should we mention about the issued URN in our new application?',
    a: 'Yes. You need to mention about the same in Part I (D) of the Form B application. Further, a detailed report regarding the issued URN may be submitted when and where directed by the competent Authority.' },

  { id: 'urn-18', category: 'urn',
    q: 'We are applying for the URN to manufacture the controlled substance. Should we mandatorily fill the Part II (A) of the Form B application?',
    a: 'Yes. Part II (A) is mandatorily filled by the applicant, for applying the URN for manufacturing the controlled substance.' },

  { id: 'urn-19', category: 'urn',
    q: 'We are applying for the URN to consume the controlled substance. Should we mandatorily fill the Part II (B) of the Form B application?',
    a: 'Yes. Part II (B) is mandatorily filled by the applicant, for applying the URN for consumption of the controlled substance.' },

  { id: 'urn-20', category: 'urn',
    q: 'What is meant by "names of other principal raw material (by weight) used" in Part II (B) of the Form B?',
    a: 'Here, applicant has to provide the name of other raw materials which is to be used in production, apart from the controlled substance.' },

  { id: 'urn-21', category: 'urn',
    q: 'What is meant by Installed consumption capacity (Annual / Kilogram)?',
    a: 'This is the maximum consumption capacity of controlled substance in your plant / factory.' +
      '<p>The maximum limit will be approved by the Competent Authority by scrutinizing the pollution clearance consent (from State Pollution Control Board) for the end products which you have already obtained, and the flow chart of the final product indicating the quantity of the controlled substance consumed for every 100 kg of final product produced.</p>' +
      '<p>Hence you are advised to put a value according to the above factors, for early disposal of your application.</p>' },

  { id: 'urn-22', category: 'urn',
    q: 'In Part III (A) of the Form B application, can I fill my residential address?',
    a: 'No. Part III (A) is exclusively for the address details of the company, where actual nature of activity takes place (Manufacture, Consumption etc.).' },

  { id: 'urn-23', category: 'urn',
    q: 'In Part III (B) of the Form B application, should I fill my PAN number?',
    a: 'No. Company PAN number should be filled.' },

  { id: 'urn-24', category: 'urn',
    q: 'My company name has changed, but I haven\'t updated the name in PAN, GST etc. Can I apply for a change in name in URN now?',
    a: 'No. For changing the name of the company in URN, you have to change the company name in CIN, GST, PAN, GPCB, and other govt. licenses etc. before applying for the name change in URN.' },

  { id: 'urn-25', category: 'urn',
    q: 'My company is a partnership firm. Which details have to be submitted along with the application?',
    a: 'In case of a partnership firm, the Partnership deed has to be submitted. The details of partners (Name, Complete postal address, PIN code, Telephone, FAX number, e-mail id, Telephone number, Mobile number, the copy of the govt. issued photo identity card) should be submitted in a separate sheet.' },

  { id: 'urn-26', category: 'urn',
    q: 'My company is a Public / Private Limited Company. What details have to be submitted along with the application?',
    a: 'The Article of Association / Memorandum of Understanding has to be submitted. The details of Directors, Managing Director, CEO etc. (Name, Complete postal address, PIN code, Telephone, FAX number, e-mail id, Telephone number, Mobile number, the copy of the govt. issued photo identity card) should be submitted in a separate sheet.' },

  { id: 'urn-27', category: 'urn',
    q: 'I am applying for URN for a society / trust. What details have to be submitted along with the application?',
    a: 'The Details of Trusteeship or any such other documents as applicable have to be submitted. The details of Trustees / Society members (Name, Complete postal address, PIN code, Telephone, FAX number, e-mail id, Telephone number, Mobile number, the copy of the govt. issued photo identity card) should be submitted in a separate sheet.' },

  { id: 'urn-28', category: 'urn',
    q: 'What are the supporting details/documents to be submitted along with the application other than the essential documents?',
    a: '<ul><li>Plan for storage facility of the controlled substance (to include layout plan / sketch).</li><li>Safety measures for safe upkeep and security of the place where the controlled substances are to be kept / stored (including photographs of the storage area).</li><li>Provisions in place for averting any damage / loss due to fire incidents. NOC from the concerned Fire Department.</li><li>Arrangements of CCTV coverage and presence of security guards, if any.</li><li>Access control measures for the room where the controlled substances are to be kept (with specific mention about the authorized person/official having access to the controlled substance).</li></ul>' },

  { id: 'urn-29', category: 'urn',
    q: 'What is the consolidated procedure for applying for a new URN?',
    a: 'Refer Doc-1 and FAQ for the same.' },

  { id: 'urn-30', category: 'urn',
    q: 'What is the consolidated procedure for adding a new controlled substance in an existing URN?',
    a: 'Refer Doc-1 and FAQ for the same.' },

  { id: 'urn-31', category: 'urn',
    q: 'What is the consolidated procedure for adding new premises in an existing URN?',
    a: 'Refer Doc-2 and FAQ for the same.' },

  { id: 'urn-32', category: 'urn',
    q: 'What is the consolidated procedure for adding a new end product or for increasing annual installed consumption capacity, in an existing URN?',
    a: 'Refer Doc-3 and FAQ for the same.' },

  { id: 'urn-33', category: 'urn',
    q: 'What is the consolidated procedure for change of Applicant in Form B?',
    a: 'Refer Doc-1 and FAQ for the same.' },

  { id: 'urn-34', category: 'urn',
    q: 'What is the consolidated procedure to add / replace authorized signatories in Form B?',
    a: 'Refer Doc-1 and FAQ for the same.' },

  { id: 'urn-35', category: 'urn',
    q: 'What is the consolidated procedure for surrendering the URN?',
    a: 'Refer Doc-4 and FAQ for the same.' },

  // ── Addition of Premises (5) ──
  { id: 'prem-1', category: 'premises',
    q: 'In which form/format should I have to apply for the addition of premises?',
    a: 'Application for addition of premises is to be done by offline application in the format of Form-B.' },

  { id: 'prem-2', category: 'premises',
    q: 'Whether new premises can be added under the existing URN?',
    a: 'New premises can be added under an existing URN, wherever the name of the company in new premises is same, and a separate SUB URN will be issued for the new premises.' },

  { id: 'prem-3', category: 'premises',
    q: 'If the name of the company in new premises is different, what would be the procedure to apply for the URN?',
    a: 'Application for the new URN can be filed in the portal. Please refer FAQ for applying for a new URN.' },

  { id: 'prem-4', category: 'premises',
    q: 'Whether the Pollution clearance certificate for the new premises is mandatorily required?',
    a: 'The pollution clearance (from State Pollution Control Board) for all the end products in all the premises is mandatorily required, prior to applying for the URN / addition of premises in the existing URN.' },

  { id: 'prem-5', category: 'premises',
    q: 'What are the supporting details/documents to be submitted along with the application other than the essential documents?',
    a: '<ul><li>Plan for storage facility of the controlled substance (to include layout plan / sketch).</li><li>Safety measures for safe upkeep and security of the place where the controlled substances are to be kept / stored (including photographs of the storage area).</li><li>Provisions in place for averting any damage / loss due to fire incidents. NOC from the concerned Fire Department.</li><li>Arrangements of CCTV coverage and presence of security guards, if any.</li><li>Access control measures for the room where the controlled substances are to be kept (with specific mention about the authorized person/official having access to the controlled substance).</li></ul>' },

  // ── End Products & Consumption Capacity (3) ──
  { id: 'end-1', category: 'endproduct',
    q: 'In which form should I have to apply for the addition of new end product and for increasing the annual installed consumption capacity?',
    a: 'All applications for the addition of new end product and for increasing the annual installed consumption capacity are to be done by submitting a written application for the same.' },

  { id: 'end-2', category: 'endproduct',
    q: 'Whether the Pollution clearance certificate is mandatorily required for addition of new end products and increasing the annual installed consumption capacity?',
    a: 'The pollution clearance (from State Pollution Control Board) for all the end products in all the premises is mandatorily required, prior to applying for the addition of new end products / increasing the annual installed consumption capacity of the CS.' },

  { id: 'end-3', category: 'endproduct',
    q: 'What are the supporting details/documents to be submitted along with the application other than the essential documents?',
    a: '<ul><li>Plan for storage facility of the controlled substance (to include layout plan / sketch).</li><li>Safety measures for safe upkeep and security of the place where the controlled substances are to be kept / stored (including photographs of the storage area).</li><li>Provisions in place for averting any damage / loss due to fire incidents. NOC from the concerned Fire Department.</li><li>Arrangements of CCTV coverage and presence of security guards, if any.</li><li>Access control measures for the room where the controlled substances are to be kept (with specific mention about the authorized person/official having access to the controlled substance).</li></ul>' },

  // ── Surrendering the URN (4) ──
  { id: 'surr-1', category: 'surrender',
    q: 'In which form should I have to apply for surrendering the URN?',
    a: 'All applications for surrendering the URN are to be done by submitting a written application for the same.' },

  { id: 'surr-2', category: 'surrender',
    q: 'What are the prerequisites before applying for surrendering the URN?',
    a: 'The closing balance of the Controlled substance of the quarter should be zero. If the company has any controlled substance in possession, the application for destruction / disposal of the controlled substance, or to add "Sale" as a nature of activity, is to be submitted prior to the application of surrender.' },

  { id: 'surr-3', category: 'surrender',
    q: 'What are the supporting documents to be submitted along with the application?',
    a: 'Form F / E of the last four quarters, and a notarized undertaking which states that the company will preserve all the documents related to the URN for the next five years from the date of the last entry in the Form D/C register.' },

  { id: 'surr-4', category: 'surrender',
    q: 'Until when does the company have to keep entering the daily consumption/production in the Form D/Form C register?',
    a: 'The last date of such entry should be the date on which the NCB Zonal office has approved the surrender request for the URN.' }
];
