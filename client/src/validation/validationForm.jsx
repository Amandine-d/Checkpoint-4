import * as Yup from 'yup';

const projectValidation = Yup.object().shape({
    title: Yup.string()
        .min(3, 'This title is too short')
        .required('Mandatory field'),
    description_project: Yup.string()
        .min(20, 'Tell us more')
        .required('Mandatory field'),
    start_date: Yup.date().required('Mandatory field'),
    end_date: Yup.date().required('Mandatory field'),
    // tags: Yup.string().required('Mandatory field'),
});

const imagesValidation = Yup.object().shape({
    srcBefore: Yup.mixed().required('Mandatory field'),
    project_id: Yup.number()
        .min(1, 'Missing id project')
        .required('Mandatory field'),
    description: Yup.string()
        .min(20, 'Tell us more')
        .required('Mandatory field'),
    location: Yup.string().min(20, 'Tell us more').required('Mandatory field'),
    is_poster: Yup.number()
        .min(1, 'Missing property')
        .required('Mandatory field'),
});

const testimonialsValidation = Yup.object().shape({
    firstname: Yup.string()
        .min(2, 'Name too short')
        .required('Mandatory field'),
    quote: Yup.string().min(2, 'Name too short').required('Mandatory field'),
});

export { projectValidation, imagesValidation, testimonialsValidation };
