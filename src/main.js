import TripPresenter from './presenter/trip-presenter';
import RouteModel from './model/route';
import FilterPresenter from './presenter/filter-presenter';
import Filter from './model/filter';
import DestinationModel from './model/destination';
import Api from './api';
import {AUTHORIZATION, ENDPOINT} from './const';
import OfferModel from './model/offer';
import TripInfoPresenter from './presenter/trip-info-presenter';

const header = document.querySelector('.trip-main');
const tripFilters = document.querySelector('.trip-controls__filters');
const tripEvents = document.querySelector('.trip-events');

const apiService = new Api(ENDPOINT, AUTHORIZATION);
const destinationModel = new DestinationModel(apiService);
const offersModel = new OfferModel(apiService);
const routeModel = new RouteModel({
  apiService,
  destinationModel,
  offersModel,
});

const filterModel = new Filter();
const tripPresenter = new TripPresenter(tripEvents, routeModel, filterModel, destinationModel, offersModel);
const filterPresenter = new FilterPresenter(tripFilters, filterModel, routeModel);
const tripInfoPresenter = new TripInfoPresenter(header, routeModel, destinationModel);

filterPresenter.init();
tripPresenter.init(tripEvents);
tripInfoPresenter.init();
routeModel.init();
