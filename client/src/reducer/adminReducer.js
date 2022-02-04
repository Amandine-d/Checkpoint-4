/* eslint-disable prettier/prettier */
/* eslint-disable indent */
// import {
//   UPDATE_PROJECTS,
//   UPDATE_CREATED_PROJECT,
//   UPDATE_PROJECT_ID,
//   UPDATE_TITLE_PROJECT,
//   UPDATE_DESCRIPTION_PROJECT,
//   UPDATE_START_DATE,
//   UPDATE_END_DATE,
//   UPDATE_TAGS,
//   UPDATE_IMAGES,
//   UPDATE_PROJECT_IMG,
//   UPDATE_CREATED_IMAGES,
//   UPDATE_SRC,
//   UPDATE_ALT,
//   UPDATE_DESCRIPTION_IMG,
//   UPDATE_IS_POSTER,
//   RESET_INPUT,
//   RESET_FILE_INPUT,
//   UPDATE_CREATE_BTN,
//   UPDATE_UPDATE_BTN,
//   UPDATE_DELETE_BTN
// } from '../actions/adminActions';
import adminAction from "../actions/adminActions";

const { UPDATE_PROJECTS,
  UPDATE_CREATED_PROJECT,
  UPDATE_PROJECT_ID,
  UPDATE_TITLE_PROJECT,
  UPDATE_DESCRIPTION_PROJECT,
  UPDATE_START_DATE,
  UPDATE_END_DATE,
  UPDATE_TAGS,
  UPDATE_IMAGES,
  UPDATE_PROJECT_IMG,
  UPDATE_CREATED_IMAGES,
  UPDATE_SRC,
  UPDATE_ALT,
  UPDATE_DESCRIPTION_IMG,
  UPDATE_IS_POSTER,
  RESET_INPUT,
  RESET_FILE_INPUT,
  UPDATE_CREATE_BTN,
  UPDATE_UPDATE_BTN,
  UPDATE_DELETE_BTN,
  UPDATE_TESTIMONIALS,
  UPDATE_FIRSTNAME,
  UPDATE_QUOTE,
  UPDATE_CREATED_TESTIMONIALS,
  UPDATE_TESTIMONIAL_ID
} = adminAction;
const adminReducer = (state, action) => {
  console.log(action.type);
  switch (action.type) {
    case UPDATE_PROJECTS:
      return { ...state, projects: action.payload };
    case UPDATE_PROJECT_ID:
      return { ...state, projectId: action.payload };
    case UPDATE_CREATED_PROJECT:
      return { ...state, createdProject: action.payload };
    case UPDATE_TITLE_PROJECT:
      return { ...state, projectTitle: action.payload };
    case UPDATE_DESCRIPTION_PROJECT:
      return { ...state, projectDescription: action.payload };
    case UPDATE_START_DATE:
      return { ...state, startDate: action.payload };
    case UPDATE_END_DATE:
      return { ...state, endDate: action.payload };
    case UPDATE_TAGS:
      return { ...state, tags: action.payload };
    case UPDATE_IMAGES:
      return { ...state, images: action.payload };
    case UPDATE_PROJECT_IMG:
      return { ...state, projectImg: action.payload };
    case UPDATE_CREATED_IMAGES:
      return { ...state, createdImg: action.payload };
    case UPDATE_SRC:
      return { ...state, src: action.payload };
    case UPDATE_ALT:
      return { ...state, alt: action.payload };
    case UPDATE_DESCRIPTION_IMG:
      return { ...state, descriptionImg: action.payload };
    case UPDATE_IS_POSTER:
      return { ...state, isPoster: action.payload };
    case RESET_FILE_INPUT:
      return { ...state, file: '' };
    case UPDATE_CREATE_BTN:
      return { ...state, createBtnActive: !state.createBtnActive };
    case UPDATE_UPDATE_BTN:
      return { ...state, updateBtnActive: !state.updateBtnActive };
    case UPDATE_DELETE_BTN:
      return { ...state, deleteBtnActive: !state.deleteBtnActive };
    case UPDATE_TESTIMONIALS:
      return { ...state, testimonials: action.payload };
    case UPDATE_CREATED_TESTIMONIALS:
      return { ...state, createdTestimonials: action.payload };
    case UPDATE_FIRSTNAME:
      return { ...state, firstname: action.payload };
      case UPDATE_TESTIMONIAL_ID:
        return { ...state, testimonialId: action.payload };
    case UPDATE_QUOTE:
      return { ...state, quote: action.payload };
    case RESET_INPUT:
      return {
        ...state,
        projectId: '',
        createdProject: '',
        projectTitle: '',
        projectDescription: '',
        startDate: '',
        endDate: '',
        tags: '',
        createdImg: '',
        src: '',
        alt: '',
        descriptionImg: '',
        isPoster: '0',
        createdTestimonials: '',
        firstname: '',
        quote: '',
        testimonialId:''

      };
    default:
      return state;
  }
};

export default adminReducer;
