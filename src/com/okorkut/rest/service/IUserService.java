package com.okorkut.rest.service;

import java.util.List;

import com.okorkut.rest.DTO.KullaniciDTO;

public interface IUserService {

	public int kaydet(KullaniciDTO kullaniciDTO);

	public boolean sil(int id);

	public KullaniciDTO guncelle(KullaniciDTO kullaniciDTO);

	public KullaniciDTO getKullaniciById(int id);

	public List<KullaniciDTO> getKullanicilar();

}
