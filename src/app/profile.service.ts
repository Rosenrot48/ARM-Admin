import { Injectable } from '@angular/core';
import {Stub_object} from './stub_object';
import {objectsList} from './mock-objects';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, of, pipe} from 'rxjs';
import {catchError, map, tap } from 'rxjs/operators';
import {MessageService} from './message.service';
